const noteRoutes = require('./routes_note');

module.exports = function(app, db) {
    noteRoutes(app, db);

  };