const 
    crypto = require('crypto'),
    fs = require('fs'),    
    path = require('path'),
    http = require('http'),
    request = require('request'),
    hashes = crypto.getHashes(),
    hashingAlgorithm = 'sha256'
    
let found = false;
let nonce = 1;
while (!found) {

    let hash = crypto.createHash(hashingAlgorithm)
    let message = 'Hello, World!' + nonce
    hash.update(message);
    const digest = hash.digest('hex')

    if (digest.substring(0,3) == "000") {
        console.log("\n**********PART 1**********")
        console.log(`The '${hashingAlgorithm}' digest of '${message}' is: ${digest}`);
        console.log("**********PART 1**********\n")
        found = true;
    }

    nonce++
}

request('http://albertcervantes.com/cs4220/messages.json', (error, response, body) => {

    let objectArray = JSON.parse(body)

    console.log("\n**********PART 2**********")
    for (let i = 0; i < objectArray.length; i++){
        let message = objectArray[i].message
        let signature = objectArray[i].signature
        // console.log(objectArray[i].signature)

        const
            fullPublicKeyPath = path.resolve('public_key.pem'),
            publicKey = fs.readFileSync(fullPublicKeyPath, 'utf8'),
            verify = crypto.createVerify('SHA256')

            verify.update( message )

        const isValidSignature = verify.verify(publicKey, signature, 'hex')

        if (isValidSignature) console.log(`true - ${message}`)
        else console.log(`false - ${message}`)
    }
    console.log("**********PART 2**********\n")
    
})