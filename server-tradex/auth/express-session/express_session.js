const session = require("express-session");
const MemoryStore = session.MemoryStore;
const uuid = require('uuid').v4;
module.exports = session({
  secret: "flying_chital", //default secret password for session kept as flying_chital
  resave: false,
  saveUninitialized: true,
  store: new MemoryStore(),

  cookie: { maxAge: 30 * 60000 }, //maxage of the cookie is kept 60000 after which the cookie will expire
  //and user has to login again
});
//creates a sessional storage
