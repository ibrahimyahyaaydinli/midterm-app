const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/bursa.json?access_token=pk.eyJ1IjoieWFoeWE2MyIsImEiOiJjbDJhMXR6amIwMTV5M2VydWphdnh3anNhIn0.7h00szelR4lqF3WvG46OYA'

    request( {url: url, json:true},response =>{
        
            longitude= response.body.features[0].center[0],
            latitude= response.body.features[0].center[1],
            location= response.body.features[0].place_name
        

        })
    }

    module.exports=geocode