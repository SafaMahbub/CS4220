Vue.filter('highlight', function(string, searchWord) {
    let stringArray = string.split(/\b(\w+)\b/g)
    for(let i = 0; i < stringArray.length; i++) {
        if (stringArray[i].toLowerCase() === searchWord.toLowerCase()) {
            stringArray[i] = '<span style=\"background-color:yellow;\">' + stringArray[i] + '</span>'
        }
    }
    let newString = stringArray.join('')
    return newString
});

// Vue.component('pulse-loader', require('vue-spinner'));

let CNfacts = new Vue({
    el: '#CNfacts',

    // The data that will bind to our template
    data: {
        appName: 'Chuck Norris Facts',
        currentFact: '',
        previousFacts: [],
        listOfCategories: ["all"],
        isFetchingAFact: false,
        categoryChosen: 'all',
        currentSearch: '',
        searchResults: [],
        previousSearchs: [],
        isFetchingASearch: false,
        searchOrGet: false
    },

    // Methods that may be called on our vue object
    methods:{

        // Fetch a joke from icanhazdadjoke.com
        getFact: function(){
            
            this.isFetchingAFact = true
            let viewModel = this
            axios.get('https://api.chucknorris.io/jokes/random', {
                headers: {
                    Accept: 'application/json'
                }
            })
            .then(function(response){

                viewModel.isFetchingAFact = false
                console.log(response)

                // Add the current joke to the previous jokes array
                if (viewModel.currentFact)
                    viewModel.previousFacts.push(viewModel.currentFact)

                // Assign the new joke to the 'currentFact' property
                viewModel.currentFact = response.data.value
            })
            .catch(function(err){
                alert(err)
            })

        },

        getCategories: function(){
            
            let viewModel = this

            axios.get('https://api.chucknorris.io/jokes/categories', {
                headers: {
                    Accept: 'application/json'
                }
            })
            .then(function(response){
                console.log(response)
                viewModel.listOfCategories.push.apply(viewModel.listOfCategories,response.data)
            })
            .catch(function(err){
                alert(err)
            })
        },

        getFactFromCategory: function(category){
            
            let viewModel = this
            this.searchOrGet = false;
            viewModel.isFetchingAFact = true
            if (category === "all") {
                this.getFact()
            }
            else
            axios.get('https://api.chucknorris.io/jokes/random?category=' + category, {
                headers: {
                    Accept: 'application/json'
                }
            })
            .then(function(response){

                viewModel.isFetchingAFact = false
                console.log(response)

                // Add the current joke to the previous jokes array
                if (viewModel.currentFact)
                    viewModel.previousFacts.push(viewModel.currentFact)

                // Assign the new joke to the 'currentFact' property
                viewModel.currentFact = response.data.value
            })
            .catch(function(err){
                alert(err)
            })
        },

        // Fetch a joke from icanhazdadjoke.com
        getSearch: function(){
            
            let viewModel = this
            this.searchOrGet = true;
            viewModel.isFetchingASearch = true
            axios.get('https://api.chucknorris.io/jokes/search?query=' + this.currentSearch, {
                headers: {
                    Accept: 'application/json'
                }
            })
            .then(function(response){
                viewModel.isFetchingASearch = false
                console.log(response)

                // Add the current joke to the previous jokes array
                if (viewModel.currentSearch)
                    viewModel.previousSearchs.push(viewModel.currentSearch)

                // Assign the new joke to the 'currentFact' property
                viewModel.searchResults = [];
                for(let i = 0; i < response.data.result.length; i++) {
                    viewModel.searchResults.push(response.data.result[i].value)
                }
            })
            .catch(function(err){
                alert(err)
            })
        },       
    },
})
CNfacts.getCategories()