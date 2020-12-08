const axios = require("axios");

const argv = require('yargs').options({
    address: {
        alias: 'a',
        description: 'City address to get the weather',
        demand: true
    }
}).argv;

const encodedUrl = encodeURI(argv.address);
const API_KEY = '67985f7525ef760712d9f5033933f10e';
const unit = 'metric';

const instance = axios.create({
    baseURL: `https://api.openweathermap.org/data/2.5/weather?q=${encodedUrl}&appid=${API_KEY}&units=${unit}`
  });

console.log(argv.address);



instance.get()
.then((resp) => {
    console.log(resp);
    // console.log(resp.status);
    // console.log(resp.data.main);
    // console.log(resp.data.main);
})
.catch(err => console.log('An error has occurred', err));