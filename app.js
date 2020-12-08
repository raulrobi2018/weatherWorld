const { require } = require("yargs");

const argv = require('yargs').options({
    address: {
        alias: 'a',
        description: 'City address to get the weather',
        demand: true
    }
}).argv;

console.log(argv.address);