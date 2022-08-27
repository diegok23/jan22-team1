const database = require('./database');
let todayDate = new Date().toISOString().slice(0, 10);

//QUERIES

const main = (req, res) => {
  res.status(200).send('Main page');
};

//LISTA DE USUARIOS
const getUsers = (req, res) => {
  database.pool.query('SELECT * FROM users', (error, result) => {
    res.json(result.rows);
  });
};

//INFORMACION BASICA DEL USUARIO (PROFILE)
const getUserProfile = (req, res) => {
  const userId = req.params.userId;
  const query = `SELECT firstname||' '||lastname AS username, email, country, city, description, imgProfile FROM users WHERE id=$1`;
  database.pool
    .query(query, [userId])
    .then((result) => res.json(result.rows))
    .catch((e) => console.error(e));
};

//LISTA DE RUTAS
const getRoutes = (req, res) => {
  database.pool.query(
    `SELECT u.username AS created_by, r.routeName, r.description, r.url, r.created_at FROM routes AS r
  INNER JOIN users AS u ON r.userId=u.id`,
    (error, result) => {
      res.json(result.rows);
    }
  );
};

//INFORMACION DE UNA RUTA
const getRoutesById = (req, res) => {
  const routeId = req.params.routeId;
  const query = `SELECT u.username AS created_by, r.routeName, r.description, r.url, r.created_at FROM routes AS r
  INNER JOIN users AS u ON r.userId=u.id
  WHERE r.id=$1`;
  database.pool
    .query(query, [routeId])
    .then((result) => res.json(result.rows))
    .catch((e) => console.error(e));
};

//BUSQUEDA DE UNA RUTA
const getRoutesBySearch = (req, res) => {
  const searchString = req.query.s;
  const query = `SELECT u.username AS created_by, r.routeName, r.description, r.url, r.created_at FROM routes AS r
  INNER JOIN users AS u ON r.userId=u.id
  WHERE (r.routeName, r.country, r.city, r.description)::text ILIKE '%${searchString}%'`;
  database.pool
    .query(query)
    .then((result) => res.json(result.rows))
    .catch((e) => console.error(e));
};

//CREAR UNA RUTA
const postRoute = (req, res) => {
  const userId = req.params.userId;
  const values = [userId];
  const keys = Object.keys(req.body);

  let position = 2;
  let updateArrayKeys = ['userId'];
  let updateArrayPositions = ['$1'];

  keys.forEach((key) => {
    const keyValue = `${key}`;
    const keyPosition = `$${position}`;
    updateArrayKeys.push(keyValue);
    updateArrayPositions.push(keyPosition);
    values.push(req.body[key]);
    position++;
  });

  updateArrayKeys.push('created_at');
  updateArrayPositions.push(`$${position}`);
  values.push('NOW()');

  const queryTitles = updateArrayKeys.join(', ');
  const queryPositions = updateArrayPositions.join(', ');

  database.pool
    .query(`INSERT INTO routes (${queryTitles}) VALUES (${queryPositions})`, values)
    .then(() => res.send(`Route created!`))
    .catch((e) => console.error(e));
};

//MARCAR RUTA COMO FAVORITA
const postFavoriteRoute = (req, res) => {
  const userId = req.body.userId;
  const routeId = req.params.routeId;

  database.pool
    .query(`INSERT INTO favRoutes (userId, routeId) VALUES ($1,$2) ON CONFLICT DO NOTHING`, [userId, routeId])
    .then(() => res.send(`Route marked as favorite!`))
    .catch((e) => console.error(e));
};

//MOSTRAR RUTAS FAVORITAS DE UN USUARIO
const getFavoriteRoutes = (req, res) => {
  const userId = req.params.userId;

  database.pool
    .query(
      `SELECT r.country, r.city, r.routeName, r.length, r.description, r.url, r.created_at FROM favRoutes AS f
    INNER JOIN users AS u ON f.userID=u.id
    INNER JOIN routes AS r ON f.routeID=r.id
    WHERE f.userId=${userId} ORDER BY routeId`
    )
    .then((result) => res.json(result.rows))
    .catch((e) => console.error(e));
};

module.exports = {
  main,
  getUsers,
  getUserProfile,
  getRoutes,
  getRoutesById,
  getRoutesBySearch,
  getFavoriteRoutes,
  postRoute,
  postFavoriteRoute
};
