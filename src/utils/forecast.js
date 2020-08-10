const request = require('postman-request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=810efd5f37c12b7c0a0b5a518a323c9a&query=' + latitude + ',' + longitude + '&units=m'

    request({ url, json: true }, (error, {body}) => {
        if (error) {
            callback('Weather service unavailable.')
        } else if (body.error) {
            callback('Unable to find weather for provided location.')
        } else {
            const {temperature, feelslike, weather_descriptions, precip, wind_speed} = body.current
            callback(undefined, weather_descriptions[0] + '. It is currently ' + temperature + ' degrees out, but feels like ' + feelslike + ' degrees out. Chance of rain is ' + precip + '%. Wind speed is ' + wind_speed + 'km/hour.')
        }
    })
}

module.exports = forecast