const express = require('express');
const app = express();
const api = require('./api');
//const cors = require('cors');
const bodyParser = require('body-parser');
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
//app.use(cors());

require('./user/routes/auth.routes')(app);
require('./user/routes/user.routes')(app);

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
