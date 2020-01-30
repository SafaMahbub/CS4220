const
    git = require('./index.js'),
    inquirer = require('inquirer')


// HINT for #4 in Lab
const search = (username) => {
    git.search(username)
        .then(result => {
            console.log(`----Repos of ${username}----`)
            let i = 1;
            result.forEach(repo => {
                console.log(i + '. ' + repo.name)
                i++
            });
        })
        .catch(err => console.log(err))
}

module.exports = {
    search
}
