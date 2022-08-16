const express = require('express');
const app = express();
const api = require('./api');
const bodyParser = require('body-parser');

const myLogger = (req, res, next) => {
  const log = {
    date: new Date(),
    url: req.url
  };
  console.log(JSON.stringify(log, null, 2));
  next();
};

app.use(bodyParser.json());
app.use(myLogger);

app.get('/search', api.getRoutesBySearch);
app.get('/users', api.getUsers);
app.get('/users/:userId', api.getUserProfile);
app.get('/favorites/:userId', api.getFavoriteRoutes);
app.get('/routes', api.getRoutes);
app.get('/routes/:routeId', api.getRoutesById);
app.post('/routes/:routeId', api.postFavoriteRoute);
app.post('/users/:userId', api.postRoute);

const PORT = 4000;
const url = `http://localhost:${PORT}`;
app.listen(PORT, () => console.log(`Listening on port ${url}`));
