const request = require('request')

const geocode = (address) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoieWFoeWE2MyIsImEiOiJjbDJhMXR6amIwMTV5M2VydWphdnh3anNhIn0.7h00szelR4lqF3WvG46OYA'

    request( {url: url, json:true},response =>{
        
            
            location= 'Bursa'
        

        })
    }

    module.exports=geocode