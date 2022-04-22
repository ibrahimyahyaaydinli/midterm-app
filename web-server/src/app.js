   
const geocode = require('./utils/geocode.js')
const weather = require('./utils/weather.js')

console.log("hello world")
geocode(address, data => {
    weather(data.latitude, data.longitude, weather => {
        
        
        
    })

})