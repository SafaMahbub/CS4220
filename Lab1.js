const 
    http = require('http'),
    fr = require('fs');
    path = require('path')

 const sample = [
    'http://www.google.com/',
    'http://www.spotify.com/us/',
    'http://twitter.com/',
    'http://google.com/nothing'
]

const getTime = (url, callback) => {
        let startTime = new Date().getTime();
        http.get(url, (res) => {
            let endTime = new Date().getTime();
            let timeElapsed = endTime - startTime;
            const error = !timeElapsed ? 0 : null
            callback(error, timeElapsed)
        }).on('error', (err) => {
            console.log('Error: ' + err)
        })
}

const printTimes = (sample) => {
    let sampleObject = []
    sample.forEach((log) => {
        getTime(log, (error, result) => {
            if (error){
                sampleObject.push({'url': log, 'time': error})
            }
            else{
                sampleObject.push({'url': log, 'time': result})
            }
            if (sampleObject.length == sample.length) {
                console.log("\nPROBLEM 1:")
                console.log(sampleObject);
            }
        }) 
    })
}
printTimes(sample)


const checkStatus = (url) => {
    return new Promise((resolve, reject) => {
        http.get(url, (res) => {
            if(res.statusCode >= 400 && res.statusCode < 600) {
                resolve("failed")
            }
            else if (res.statusCode >= 200 && res.statusCode < 400){
                resolve("success")
            }
            else {
                reject(new Error("error"))
            }
       })
    })
}

const printCodes = (sample) => {
    let sampleObject = {
        success: [],
        error: []
    }
    sample.forEach((log) => {
        checkStatus(log)
            .then((resolve) => {
                if (resolve == "success") {
                    sampleObject['success'].push(log)
                }
                else if (resolve == "failed") {
                    sampleObject['error'].push(log)
                }
                if(sampleObject.success.length + sampleObject.error.length == sample.length) {
                    console.log("\nProblem 2:")
                    console.log(sampleObject)
                }
            })
            .catch((error) => { console.log(error)})
    })
}
printCodes(sample)