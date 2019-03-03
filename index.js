const { Client } = require('klasa');
const { config} = require('./config');
const token = process.env.token;
Client.login(token).catch(err => console.log(err));
class MyKlasaClient extends Client {

    constructor(...args) {
        super(...args);

        // Add any properties to your Klasa Client
    }

    // Add any methods to your Klasa Client

}

new MyKlasaClient(config).login(token);
