const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());

const users = [];

app.post('/signup', (req, res) => {
  users.push({ username: req.body.username, password: req.body.password });
  console.log(users);
  res.status(201).json('SUCCESS');
});
app.post('/login', (req, res) => {
  let user = users.find(us => us.username == req.body.username);
  if (user == null) {
    return res.status(404).json('COULD NOT FIND USER');
  }
  if (user.password == req.body.password) {
    return res.status(201).json('SUCCESSFULLY LOGGED IN AS ' + user.username);
  } else {
    return res.status(401).json('BAD PASSWORD');
  }
});

app.listen(3001);
