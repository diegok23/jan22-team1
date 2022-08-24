const express = require("express");
const app = express();
const cors = require("cors");
const passport = require("passport");

//const { getUsers } = require("./api");

//initialize middlewares
app.use(express.json());
app.use(cors({ origin: "http://localhost:3000", credentials: true }));

//import routes
const authRoutes = require("./routes/auth");

const myLogger = (req, res, next) => {
  const log = {
    date: new Date(),
    url: req.url,
  };
  console.log(JSON.stringify(log, null, 2));
  next();
};
app.use(myLogger);

app.get("/", (req, res) => {
  res.json({ message: "Hello world!" });
});

app.use("/users", authRoutes);

const PORT = process.env.PORT || 4000;
const url = `http://localhost:${PORT}`;
app.listen(PORT, () => console.log(`Listening on port ${url}`));
