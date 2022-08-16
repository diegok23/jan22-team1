const express = require('express');
const app = express();
const api = require('./api');
const cors = require('cors');
require('./configs/dotenv');
const bodyParser = require('body-parser');
const client = require('./configs/userDB');
const user = require('./routes/users');

const myLogger = (req, res, next) => {
  const log = {
    date: new Date(),
    url: req.url
  };
  console.log(JSON.stringify(log, null, 2));
  next();
};

client.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Data logging initiated!');
  }
});

app.use(bodyParser.json());
app.use(myLogger);
app.use('/users', user);
app.use(express.json());
app.use(cors());

app.get('/', api.main);
app.get('/search', api.getRoutesBySearch);
app.get('/users', api.getUsers);
app.get('/users/:userId', api.getUserProfile);
app.get('/favorites/:userId', api.getFavoriteRoutes);
app.get('/routes', api.getRoutes);
app.get('/routes/:routeId', api.getRoutesById);
app.post('/routes/:routeId', api.postFavoriteRoute);
app.post('/users/:userId', api.postRoute);

const PORT = process.env.PORT || 4000;
const url = `http://localhost:${PORT}`;
app.listen(PORT, () => console.log(`Listening on port ${url}`));
