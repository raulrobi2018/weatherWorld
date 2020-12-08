const axios = require("axios");
const place = require('./places/place');


const argv = require('yargs').options({
    city: {
        alias: 'c',
        description: 'City address to get the weather',
        demand: true
    }
}).argv;