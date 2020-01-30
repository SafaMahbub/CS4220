const
    cards = require('deckofcards'),
    inquirer = require('inquirer')

const draw = (shuffle, n = 1) => {
    cards.deck(shuffle)
        .then(deck => cards.draw(deck.deck_id, n))
        .then(result => {
            console.log('-- CARDS --')
            result.cards.forEach(card => {
                console.log(`${card.value} of ${card.suit}`)
            })

            console.log('-- REMAING CARDS --')
            console.log(result.remaining)
        })
        .catch(err => console.log(err))
}

// HINT for #3 in Lab
const discardPrompt = (result) => {
    return inquirer.prompt([{
        type: 'checkbox',
        message: 'select up to 4 cards to throw away',
        name: 'cards',
        choices: result.cards.map(function(a) {
            return `${a.value} of ${a.suit}`
        }),
        validate: (answers) => { 
            if (answers.length > 4) {
                return false
            }
            else return true;
        }
    }])
}

// HINT for #4 in Lab
const findAndRemove = (current, throwaway) => {
    // let newHand = []
    // current.cards.forEach(card => {
    //     if (!throwaway.cards.includes(`${card.value} of ${card.suit}`))
    //     newHand.push(card)
    // })
    // current.cards = newHand
    // return current

    let arrayOfDelete = []
    for (let i = 0; i < current.length; i++) {
        let currentValue = (`${current.cards[i].value} of ${current.cards[i].suit}`).trim().toLowerCase()
        for (let j = 0; j < throwaway.length; j++) {
            let throwAwayValue = throwaway.cards[j].trim().toLowerCase()
            if (currentValue === throwAwayValue) {arrayOfDelete.push(i);console.log(arrayOfDelete)
            }
        }
    }
    console.log(arrayOfDelete)

    // let newCurrent = []
    // for(let k = 0; k < arrayOfDelete.length; k++) {
    //     newCurrent = current.cards.splice(arrayOfDelete[k],1)
    // }
    // current.cards = newCurrent
    // console.log(current.cards)
    return current
    
}

// HINT for #6 in Lab
const print = cards => {
        console.log('-- CARDS --')
        cards.cards.forEach(card => {
            console.log(`${card.value} of ${card.suit}`)
        })

        console.log('-- REMAING CARDS --')
        console.log(cards.remaining)
}

const play = (shuffle, n = 1) => {
    //draw from a shuffled deck
    cards.deck(shuffle)
        //pick up 5 cards
        .then(deck => cards.draw(deck.deck_id, n))
        .then(result => {
            //print Hand
            print(result)
            //Find cards to discard,
            discardPrompt(result)
                //once cards are selected THEN:
                .then(answers => { 
                    //remove cards
                    let newHand = findAndRemove(result, answers)
                    //get same deck
                    // cards.deck(false)
                    // //draw same number of cards you threw away
                    // .then(deck => cards.draw(result.deck_id, answers.cards.length))
                    // //combine discarded hand with newly drawn cards
                    // .then(result => {
                    //     newHand.cards = newHand.cards.concat(result.cards)
                    //     newHand.remaining = result.remaining
                    //     print(newHand)
                    // }).catch(err => console.log(err))
                }).catch(err => console.log(err))
        })
        .catch(err => console.log(err))
}

module.exports = {
    draw,
    play
}
