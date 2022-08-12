const express = require("express");
const app = express();
const cors = require("cors");

const api = require("./api");

app.use(cors());

const myLogger = (req, res, next) => {
  const log = {
    date: new Date(),
    url: req.url,
  };
  console.log(JSON.stringify(log, null, 2));
  next();
};

app.use(myLogger);

app.get("/", api.getUsers);

const PORT = process.env.PORT || 4000;
const url = `http://localhost:${PORT}`;
app.listen(PORT, () => console.log(`Listening on port ${url}`));
