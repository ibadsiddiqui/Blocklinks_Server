
module.exports = function(app, db) {
    
    const Web3 = require('web3');
    var web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
    var newAddress = "";

    app.post('/registration', async (req, res) => {
        // You'll create
        
        
        console.log(req.body.UserID)
        console.log(req.body.Email);
        console.log(req.body.Password);
        console.log(req.body.BusinessName);
        console.log(req.body.FullName);
        console.log(req.body.BusinessWeb);

        var paraphrase = String(req.body.Email) + String(req.body.Password);        
        console.log(paraphrase)

        web3.eth.personal.newAccount(paraphrase)
        .then(console.log);

        res.send(newAddress)
    })
};