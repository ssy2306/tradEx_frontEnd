const session = require("express-session");
const MemoryStore = session.MemoryStore;
module.exports = session({
  secret: "tradez", //default secret password for session kept as tradex
  resave: false,
  saveUninitialized: true,
  store: new MemoryStore(),

  cookie: { maxAge: 10*300000},
});
