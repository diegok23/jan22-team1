const express = require('express');
const app = express();
require('dotenv').config();

const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(express.urlencoded({extended: false}));

require('./user/routes/auth.routes')(app);
require('./user/routes/user.routes')(app);

const url = `http://localhost:${PORT}`;
app.listen(PORT, () => console.log(`Listening on port ${url}`));
