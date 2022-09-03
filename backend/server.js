const express = require('express');
const app = express();
const api = require('./api');
const cors = require('cors');
const bodyParser = require('body-parser');
const user = require('./user/routes/user');
require('dotenv').config();
const PORT = process.env.PORT || 4000;

const myLogger = (req, res, next) => {
  const log = {
    date: new Date(),
    url: req.url
  };
  console.log(JSON.stringify(log, null, 2));
  next();
};

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(myLogger);
app.use('/user', user);
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

const url = `http://localhost:${PORT}`;
app.listen(PORT, () => console.log(`Listening on port ${url}`));
