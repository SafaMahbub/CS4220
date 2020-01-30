////////////////PART 1////////////////
class Groups {
    constructor(array = []){
        this.array = array;
    }

    addGroup({name = "", leader = "", members = []}) {
        this.array.push({name , leader , members });
    }

    removeGroup(groupName) {
        this.array = this.array.filter(item => item.name.toLowerCase() != groupName.toLowerCase())
    }

    addMember(groupName, memberName) {
       for (let i = 0; i < this.array.length; i++){
           if (this.array[i].name.toLowerCase() == groupName.toLowerCase()) {
            this.array[i].members.push(memberName)
           }
       }
    }

    removeMember(groupName, memberName) {
        for (let i = 0; i < this.array.length; i++){
            if (this.array[i].name.toLowerCase() == groupName.toLowerCase()) {
             this.array[i].members = this.array[i].members.filter(item => item.toLowerCase() != memberName.toLowerCase())
            }
        }
    }

    get print(){ 
        let statement = ""
        this.array.forEach(item => {
            statement += item.name + "\n";
            statement += "Leader: " + item.leader + "\n";
            statement += item.members.join(" | ")
            statement += "\n\n"
        })
        console.log(statement);
    }
}

console.log("PROBLEM 1:")
const groups = new Groups()
groups.addGroup({name: 'Justice League', leader: 'Wonder Woman', members: ['Batman', 'Superman', 'Spiderman']})
groups.addGroup({name: 'Avengers', leader: 'Iron Man', members: ['Hulk', 'Thor', 'Captain America']})
groups.print

groups.addMember('Justice League', 'Aqua Man')
groups.print

groups.removeGroup('avengers')
groups.print

groups.removeMember('Justice League', 'spiderMan')
groups.print
        
////////////////PART 2////////////////
console.log("\nPROBLEM 2:")
function displayName({first, last}) {
    console.log(`${first} ${last}`);
}

const person = {
    first: 'Elon',
    last: 'Musk',
    twitter: '@elonmusk',
    company: 'Space X'
}
const {first, last} = person


displayName(person)

////////////////PART 3////////////////
console.log("\nPROBLEM 3:")
function combineName(person, array, name) {
    // let value = array.join(" ")

    let value = ""
    if (person instanceof Object) {
        for (let i = 0; i < array.length; i++) {
            value += person[array[i]] + " "
            delete person[array[i]]
        }
        person[name] = value
    }
}

console.log(person)
combineName(person, ['first', 'last'], 'name')
console.log(person)

////////////////PART 4////////////////
console.log("\nPROBLEM 4:")
function createObject(people) {
    for (let i = 0; i< people.length; i++) {
        let indexobject = {}
        for (let j = 0; j< people[i].length; j++) {
            indexobject[people[i][j]['key']] = people[i][j]['value']
            // for (let k = 0; k < people[i][k].length; k++) {
            //     indexobject[people[i][j][k]] = people[i][j][k]
            // }
        }
        people[i] = {[i + 1] :indexobject}
        // people[i] = indexobject;
    }
}

const people = [[{
    key: 'name',
    value: 'Elon Musk'
}, {
    key: 'twitter',
    value: '@elonmusk'
}, {
    key: 'company',
    value: 'Space X'
}],
[{
    key: 'name',
    value: 'Tim Cook'
}, {
    key: 'twitter',
    value: '@tim_cook'
}, {
    key: 'company',
    value: 'Apple'
}]]

createObject(people)
console.log(people)