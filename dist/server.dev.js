"use strict";

var _require = require('dotenv'),
    config = _require.config;

var express = require("express");

var mongoose = require('mongoose');

var User = require('./models/User');

var app = express();
mongoose.connect('mongodb://localhost:3000/userdb', {
  useNewUrlParser: true
}).then(function () {
  return console.log('Connected to MongoDB');
})["catch"](function (err) {
  return console.error('Could not connect to MongoDB', err);
});
app.get('/', function (req, res) {
  res.send('Hello World!');
});
app.get('/users', function _callee(req, res) {
  var users;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(User.find());

        case 2:
          users = _context.sent;
          res.json(users);

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
}); // GET all users

app.get('/users', function _callee2(req, res) {
  var users;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(User.find());

        case 2:
          users = _context2.sent;
          res.json(users);

        case 4:
        case "end":
          return _context2.stop();
      }
    }
  });
}); // POST add new user

app.post('/users', function _callee3(req, res) {
  var _req$body, name, email, password, user;

  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _req$body = req.body, name = _req$body.name, email = _req$body.email, password = _req$body.password;
          user = new User({
            name: name,
            email: email,
            password: password
          });
          _context3.next = 4;
          return regeneratorRuntime.awrap(user.save());

        case 4:
          res.json(user);

        case 5:
        case "end":
          return _context3.stop();
      }
    }
  });
}); // PUT edit user by ID

app.put('/users/:id', function _callee4(req, res) {
  var id, _req$body2, name, email, password, user;

  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          id = req.params.id;
          _req$body2 = req.body, name = _req$body2.name, email = _req$body2.email, password = _req$body2.password;
          _context4.next = 4;
          return regeneratorRuntime.awrap(User.findByIdAndUpdate(id, {
            name: name,
            email: email,
            password: password
          }, {
            "new": true
          }));

        case 4:
          user = _context4.sent;
          res.json(user);

        case 6:
        case "end":
          return _context4.stop();
      }
    }
  });
}); // DELETE remove user by ID

app["delete"]('/users/:id', function _callee5(req, res) {
  var id;
  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          id = req.params.id;
          _context5.next = 3;
          return regeneratorRuntime.awrap(User.findByIdAndDelete(id));

        case 3:
          res.json({
            message: 'User deleted'
          });

        case 4:
        case "end":
          return _context5.stop();
      }
    }
  });
});
var PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
  console.log("Server started on port ".concat(PORT));
});
//# sourceMappingURL=server.dev.js.map
