// const Web3 = require('web3');
// var web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));

const express = require('express');
const bodyParser = require('body-parser');
const app = express();


const port = 8000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



app.listen(port, async () => {
    require('./app/routes')(app,{});
    console.log('We are live on ' + port);
})