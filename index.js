const { Client } = require('klasa');
const { config} = require('./config');
const token = process.env.token;

class MyKlasaClient extends Client {

    constructor(...args) {
        super(...args);

        // Add any properties to your Klasa Client
    }

    // Add any methods to your Klasa Client

}

new MyKlasaClient(config).login(token);
