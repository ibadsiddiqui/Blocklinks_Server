module.exports = function(app, db) {

    const Web3 = require('web3');
    var web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));

    app.post('/getReward', async (req, res) => {
        
        
        // You'll create 
        console.log('Logging IN');
        console.log('Checking Email and Password');
        console.log(req.body.Email + " " + req.body.Password);
        var address = String(req.body.Address);
        var email = String(req.body.Email);
        var password = String(req.body.Password)
        web3.eth.personal.unlockAccount("0x634c9F966987b8e0dF385a6f94fB54FE1EdB4E94", email+password, 300, () => {
            console.log('Account unlocked!')
        });

        // use the address to call the reward balance of the acccount

    })
};