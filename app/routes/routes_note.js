module.exports = function(app, db) {

    app.post('/notes', (req, res) => {
        // You'll create 
        console.log(req.body);
        console.log('sending data to App');
        res.send('Hello')
    })
};