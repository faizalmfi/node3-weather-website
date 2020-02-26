const request = require('request')

const forecast = (latitude, longtitude, callback) => {
    const url = 'https://api.darksky.net/forecast/5e213899b297b86d6ffea4ddc4105f77/'+ latitude +','+ longtitude +'?units=si'


    request({url, json:true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error){
            callback('Unable to find location!', undefined)
        } else {
            callback(undefined, body.currently.summary +'. It is currently '+body.currently.temperature+' degrees out. There is a '+body.currently.precipProbability+'% chance of rain. Forecast for the week ahead is '+body.daily.summary);
        }
    })
}

module.exports = forecast