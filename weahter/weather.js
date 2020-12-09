const axios = require("axios");

const API_KEY = "67985f7525ef760712d9f5033933f10e";
const UNIT = "metric";

const getWeather = async (city) => {
    const encodedUrl = encodeURI(city);

    const instance = axios.create({
        baseURL: `https://api.openweathermap.org/data/2.5/weather?q=${encodedUrl}&appid=${API_KEY}&units=${unit}`
    });

    //Retorna una promise
    const resp = await instance.get().catch((err) => {
        console.log(`No results for ${city}`);
        return false;
    });
    let data;

    if (resp.data.length === 0) {
        throw new Error(`No results for ${city}`);
    } else {
        data = resp.data;
    }

    return {
        city: data.name,
        lat: data.coord.lat,
        lng: data.coord.lon,
        temp: data.main.temp,
        country: data.sys.country
    };
};

const getWeatherByLatLon = async (lat, lon) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=${}`);

    return resp.data.main.temp;
};

module.exports = {
    getWeather,
    getWeatherByLatLon
};
