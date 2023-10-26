const session = require("express-session");
const MemoryStore = session.MemoryStore;
module.exports = session({
  secret: "tradex", //default secret password for session kept as tradex
  resave: false,
  saveUninitialized: true,
  store: new MemoryStore(),

  cookie: { maxAge: 30 * 60000 }, //maxage of the cookie is kept 60000 after which the cookie will expire
  //and user has to login again
});
