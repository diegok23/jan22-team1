const database = require('./database');
let todayDate = new Date().toISOString().slice(0, 10);

//QUERIES

const main = (req, res) => {
  res.status(200).send('Main page');
};

//LISTA DE USUARIOS
const getUsers = async (req, res) => {
  await database.pool
    .query('SELECT * FROM users')
    .then((result) => res.status(200).json(result.rows))
    .catch((e) => console.error(e));
};

//INFORMACION BASICA DEL USUARIO (PROFILE)
const getUserProfile = async (req, res) => {
  const userId = req.params.userId;
  const query = `SELECT firstname||' '||lastname AS username, email, country, city, description, imgProfile FROM users WHERE id=$1`;
  await database.pool
    .query(query, [userId])
    .then((result) => res.status(200).json(result.rows))
    .catch((e) => console.error(e));
};

//LISTA DE RUTAS (FEED)
const getRoutes = async (req, res) => {
  const query = `SELECT u.firstname||' ' ||u.lastname AS created_by, r.title, r.country, r.city, r.description, r.distance, r.type, r.url, TO_CHAR(r.created_at::DATE, 'Month dd, yyyy')AS created_at FROM routes AS r
  INNER JOIN users AS u ON r.userId=u.id ORDER BY created_at DESC`;
  await database.pool
    .query(query)
    .then((result) => res.status(200).json(result.rows))
    .catch((e) => console.error(e));
};

//INFORMACION DE UNA RUTA (BY ID)
const getRoutesById = async (req, res) => {
  const routeId = req.params.routeId;
  const query = `SELECT u.firstname||' ' ||u.lastname AS created_by, r.title, r.country, r.city, r.description, r.distance, r.type, r.url, TO_CHAR(r.created_at::DATE, 'Month dd, yyyy')AS created_at FROM routes AS r
  INNER JOIN users AS u ON r.userId=u.id
  WHERE r.id=${routeId}`;
  await database.pool
    .query(query)
    .then((result) => res.status(200).json(result.rows))
    .catch((e) => console.error(e));
};

//BUSQUEDA DE UNA RUTA
const getRoutesBySearch = async (req, res) => {
  const searchString = req.query.s;
  const query = `SELECT u.firstname||' ' ||u.lastname AS created_by, r.title, r.country, r.city, r.description, r.distance, r.type, r.url, TO_CHAR(r.created_at::DATE, 'Month dd, yyyy')AS created_at FROM routes AS r
  INNER JOIN users AS u ON r.userId=u.id
  WHERE (r.title, r.country, r.city, r.description)::text ILIKE '%${searchString}%'`;
  await database.pool
    .query(query)
    .then((result) => res.status(200).json(result.rows))
    .catch((e) => console.error(e));
};

//CREAR UNA RUTA
const postRoute = async (req, res) => {
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

  await database.pool
    .query(`INSERT INTO routes (${queryTitles}) VALUES (${queryPositions})`, values)
    .then(() =>
      res.status(201).json({
        message: 'Route Created!',
        isCreated: true
      })
    )
    .catch((e) => console.error(e));
};

//MARCAR RUTA COMO FAVORITA (GUARDADA)
const postFavoriteRoute = async (req, res) => {
  const userId = req.body.userId;
  const routeId = req.params.routeId;
  const query = `INSERT INTO favRoutes (userId, routeId) VALUES ($1,$2) ON CONFLICT DO NOTHING`;
  await database.pool
    .query(query, [userId, routeId])
    .then(() =>
      res.status(201).json({
        message: 'Route marked as favorite!',
        isFav: true
      })
    )
    .catch((e) => console.error(e));
};

//MOSTRAR RUTAS FAVORITAS DE UN USUARIO
const getFavoriteRoutes = async (req, res) => {
  const userId = req.params.userId;
  const query = `SELECT r.title, r.country, r.city, r.description, r.distance, r.type, r.url, TO_CHAR(r.created_at::DATE, 'Month dd, yyyy')AS created_at FROM favRoutes AS f
  INNER JOIN users AS u ON f.userID=u.id
  INNER JOIN routes AS r ON f.routeID=r.id
  WHERE f.userId=$1 ORDER BY routeId`;
  await database.pool
    .query(query, [userId])
    .then((result) => res.status(200).json(result.rows))
    .catch((e) => console.error(e));
};

//MOSTRAR RUTAS CREADAS POR UN USUARIO
const getRoutesByUser = async (req, res) => {
  const userId = req.params.userId;
  const query = `SELECT u.firstname||' ' ||u.lastname AS created_by, r.title, r.country, r.city, r.description, r.distance, r.type, r.url, TO_CHAR(r.created_at::DATE, 'Month dd, yyyy')AS created_at FROM routes AS r
  INNER JOIN users AS u ON r.userId=u.id
  WHERE u.id=${userId} ORDER BY created_at DESC`;
  await database.pool
    .query(query)
    .then((result) => res.status(200).json(result.rows))
    .catch((e) => console.error(e));
};

const updateUserDescription = async (req, res) => {
  const userId = req.body.userId;
  const description = req.body.description;
  const query = `UPDATE users SET description = '$1' WHERE u.id=${userId}`;
  await database.pool
    .query(query, [description])
    .then(() =>
      res.status(201).json({
        message: 'Description modified',
        isModified: true
      })
    )
    .catch((e) => console.error(e));
};

const updateUserPicture = async (req, res) => {
  const userId = req.body.userId;
  const picture = req.body.picture;
  const query = `UPDATE users SET imgProfile = '$1' WHERE u.id=${userId}`;
  await database.pool
    .query(query, [picture])
    .then(() =>
      res.status(201).json({
        message: 'Picture modified',
        isModified: true
      })
    )
    .catch((e) => console.error(e));
};

module.exports = {
  main,
  getUsers,
  getUserProfile,
  getRoutes,
  getRoutesById,
  getRoutesByUser,
  getRoutesBySearch,
  getFavoriteRoutes,
  postRoute,
  postFavoriteRoute,
  updateUserDescription,
  updateUserPicture
};
