
const request = require('request')

const weather = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=2e0d6a3158c6fb0aad341e0f52838ae7&query=' + latitude + ',' + longitude + '&units=m' 

    request({ url: url, json:true}, response => {
        
            callback(undefined, 'nem' + response.body.current.humidity + 
            'hava sicakligi' + response.body.current.temperature
            )
        
    })



     }
     module.exports=weather