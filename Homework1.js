//Safa Al Mahbub
//CIN: 303692901

/////////////////////////////////////
/////////////////////////////////////
//QUESTION 2

function upperCase(str) {
    let newStr = ""
    let uniCodeNUM = 0
    for ( let i = 0; i < str.length; i++) {
        uniCodeNUM = str.charCodeAt(i)
        if ( (uniCodeNUM >= 97) && (uniCodeNUM <= 122) ) uniCodeNUM -= 32
        newStr = newStr + String.fromCharCode(uniCodeNUM)
    }
    return newStr
}

function lowerCase(str) {
    let newStr = ""
    let uniCodeNUM = 0
    for ( let i = 0; i < str.length; i++) {
        uniCodeNUM = str.charCodeAt(i)
        if ( (uniCodeNUM >= 65) && (uniCodeNUM <= 90) ) uniCodeNUM += 32
        newStr = newStr + String.fromCharCode(uniCodeNUM)
    }
    return newStr
}

function capitalizedCase(str) {
    let strArray = str.split(" ")
    for (i = 0; i < strArray.length; i++) {
        strArray[i] = upperCase(strArray[i].substr(0,1)) + lowerCase(strArray[i].substr(1))
    }
    return strArray.join(" ")
}

function inverseCase(str) {
    let strArray = str.split(" ")
    for (i = 0; i < strArray.length; i++) {
        strArray[i] = lowerCase(strArray[i].substr(0,1)) + upperCase(strArray[i].substr(1))
    }
    return strArray.join(" ")
}

function sentenceCase(str, unconditionallyCapitalized) {
    let strArray = str.split(".")

    for (let i = 0; i < strArray.length; i++) {
        strArray[i] = strArray[i].trim()
    }

    for (let i = 0; i < unconditionallyCapitalized.length; i++) {
        unconditionallyCapitalized[i] = lowerCase(unconditionallyCapitalized[i])
    }

    for (let i = 0; i < strArray.length; i++) {
        let sentence = strArray[i].split(" ")
        sentence[0] = capitalizedCase(sentence[0])
        for (let j = 1; j < sentence.length; j++) {
            sentence[j] = lowerCase(sentence[j])
            if (  unconditionallyCapitalized.includes(sentence[j])  ) sentence[j] = capitalizedCase(sentence[j])
        }
        strArray[i] = sentence.join(" ")
    }
    return strArray.join(". ")
}

function alternatingCase(str) {
    let newstr = ""
    let addString = ""
    for (i = 0, alternateing = 0; i < str.length; i++, alternateing++) {
        if (alternateing%2 ==0)  addString = lowerCase(str.charAt(i))
        else addString = upperCase(str.charAt(i))
        newstr = newstr + addString
    }
    return newstr
}

function titleCase(str, lowercaseWords) {
    for (let i = 0; i < lowercaseWords.length; i++) lowercaseWords[i] = capitalizedCase(lowercaseWords[i])
    let strArray = str.split(" ")

    for (let i = 0; i < strArray.length; i++) {
        strArray[i] = capitalizedCase(strArray[i])
        if (lowercaseWords.includes(strArray[i])) strArray[i] = lowerCase(strArray[i])
    }

    strArray = strArray.join(" ").split(".")
    for (let i = 0; i < strArray.length; i++) {
        strArray[i] = strArray[i].trim()
        strArray[i] = upperCase(strArray[i].substr(0,1)) + strArray[i].substr(1)
    }


    return strArray.join(". ")
}

function runStringFunctions(){
    let str = 'I watched the storm, so beautiful yet terrific. The face of the moon was in shadow.'
    
    let unconditionallyCapitalized = ['I', 'Moon', 'Shadow']
    let lowercaseWords = ['the', 'of', 'in', 'an']
    
    console.log()
    console.log('QUESTION1:')
    console.log( 'upperCase: ', upperCase(str) )
    console.log( 'lowerCase: ', lowerCase(str) )
    console.log( 'sentenceCase: ', sentenceCase(str, unconditionallyCapitalized) )
    console.log( 'capitalizedCase: ', capitalizedCase(str) )
    console.log( 'alternatingCase: ', alternatingCase(str) )
    console.log( 'titleCase: ', titleCase(str, lowercaseWords) )
    console.log( 'inverseCase: ', inverseCase(str) )
    console.log()
} 
runStringFunctions()

/////////////////////////////////////
/////////////////////////////////////
//QUESTION 2

function getCharacterFrequency(str) {
   str = upperCase(str)
   let frequencyobject = {};

   for (let i = 0; i < str.length; i++) {
        let character = str.charAt(i)
        if ((character in frequencyobject) == false ) frequencyobject[character] = 1;
        else frequencyobject[character] = frequencyobject[character] + 1;
    }

    return frequencyobject
}

function printCharacterFrequency( frequencyObj ) {

    for (const prop in frequencyObj) {
        if (frequencyObj.hasOwnProperty(prop)) {
          console.log(`\'${prop}\' occurs ${frequencyObj[prop]} times`);
        } 
      }
}

function runCharacterFunctions(){

	let str = 'Hello, World!'
	
	let frequencyObj = getCharacterFrequency( str )
	
	printCharacterFrequency( frequencyObj )

}
console.log('QUESTION2')
runCharacterFunctions()