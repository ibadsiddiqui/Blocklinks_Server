const noteRoutes = require('./routes_note');

const loginRoutes = require('./login');

const registrationRoutes = require('./registeration');

module.exports = function(app, db) {
  noteRoutes(app, db);
  loginRoutes(app, db);
  registrationRoutes(app, db);
};