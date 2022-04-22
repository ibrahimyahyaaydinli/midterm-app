   
const geocode = require('./utils/geocode.js')
const weather = require('./utils/weather.js')


geocode(address, data => {
    weather(data.latitude, data.longitude, weather => {
        
        
        
    })

})