const request = require('request')

/*
* We will be receiving a callback function parameter with two arguments
*/
const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/9d1465c6f3bb7a6c71944bdd8548d026/' + latitude + ',' + longitude

    /*
    * Here destructuring is used
    * url: url as the first object of the first request parameter
    * 
    * Again destructuring has been used in the second parameter as well
    * {body} comes from response.body
    */
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            // reposnse is undefined
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            // again response is undefined
            callback('Unable to find location', undefined)
        } else {
            // error is undefined, the second argument is the reponse
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degress out. There is a ' + body.currently.precipProbability + '% chance of rain.')
        }
    })
}

module.exports = forecast
