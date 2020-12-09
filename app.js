const axios = require("axios");
const weather = require("./weahter/weather");

const argv = require("yargs").options({
    city: {
        alias: "c",
        description: "City address to get the weather",
        demand: true
    }
}).argv;

weather.getWeather(argv.city).then((resp) => console.log(resp));
weather.getWeatherByLatLon(40.75, -74).then(console.log).catch(console.log);