module.exports = function(app, db) {

    app.post('/registration', (req, res) => {
        // You'll create 
        console.log(req.body.email);
        console.log(req.body.password);
        console.log('sending data to App');
        res.send('Hello')
    })
};