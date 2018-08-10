module.exports = function(app, db) {

    app.post('/login', (req, res) => {
        // You'll create 
        console.log(req.body);
        console.log('sending data to App');
        res.send('Hello')
    })
};