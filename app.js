const axios = require("axios");
const weather = require("./weahter/weather");

const argv = require("yargs").options({
    city: {
        alias: "c",
        description: "City address to get the weather",
        demand: true
    }
}).argv;

const getInfo = async (city) => {
    try {
        const data = await weather.getWeather(city);
        const weat = await weather.getWeatherByLatLon(data.lat, data.lng);

        return `The temperature in ${city} now is ${weat}`;
    } catch (error) {
        return `Unable to determine the weather for ${city} `;
    }
};

getInfo(argv.city)
    .then((resp) => console.log(resp))
    .catch((resp) => console.log(resp));
