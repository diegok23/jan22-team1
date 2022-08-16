DROP TABLE IF EXISTS routes;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS favRoutes;
DROP TABLE IF EXISTS routeData;

CREATE TABLE users (
    id          SERIAL   PRIMARY KEY,
    userName    VARCHAR(30) NOT NULL,
    email       VARCHAR(120) NOT NULL,
    password    VARCHAR(120) NOT NULL,
    name        VARCHAR(120),
    city        VARCHAR(30),
    description VARCHAR(500),
    imgProfile  VARCHAR(120),
    created_at  DATE
);

CREATE TABLE routes (
    id          SERIAL PRIMARY KEY,
    userId      INT REFERENCES users(id),
    routeName   VARCHAR(120) NOT NULL,
    length      VARCHAR(30) NOT NULL,
    country     VARCHAR(30) NOT NULL,
    city        VARCHAR(30) NOT NULL,
    description VARCHAR(500) NOT NULL,
    url         VARCHAR(500) NOT NULL,
    created_at  DATE
);

CREATE TABLE favRoutes (
    id          SERIAL   PRIMARY KEY,
    userId      INT REFERENCES users(id),
    routeId     INT REFERENCES routes(id),
    UNIQUE (userId, routeId)
);

CREATE TABLE routeData (
    id          SERIAL   PRIMARY KEY,
    routeId    INT REFERENCES routes(id),
    userId      INT REFERENCES users(id),
    comments    VARCHAR(500),
    rating      DEC(1) NOT NULL,
    difficulty  DEC(1) NOT NULL,
    dateRated   DATE
);


INSERT INTO users (name, username, email, city, description, "password", imgprofile, created_at) 
VALUES
('Diego K', 'diegok', 'diego@ivan.com', 'Manresa', 'Me gusta la bici', 'password', 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png', '2022-07-30'),
('Laeken', 'laeken', 'laeken@mail.com', 'Manresa', 'Soy mas de caminar', 'password', 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png', '0022-08-02'),
('Damian', 'damian', 'damian@correo.es', 'Barcelona', 'I love biking', 'password', 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png', '2022-08-03'),
('Alejandro', 'ale', 'ale@jandro.es', 'Barcelona', 'No entiendo la vida sin mi bici', 'password', 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png', '2022-08-03'),
('Housni', 'housni', 'housni@mail.com', 'Barcelona', 'Me encanta la carretera en bici', 'password', 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png', '2022-07-31');


INSERT INTO routes (userId, routeName, length, country, city, description, url, created_at) 
VALUES
(1, 'Manresa', '2.3', 'Spain', 'Manresa', 'Ruta por la montaña y carretera en Manresa', 'https://goo.gl/maps/nrjJ65c695Gp6ta36', '2022-07-30'),
(2, 'Collserola', '7.5', 'Spain', 'Barcelona', 'Ruta por la montaña y carretera en Barcelona', 'https://goo.gl/maps/nrjJ65c695Gp6ta36', '2022-07-31'),
(1, 'Barcelona', '6.1', 'spain', 'Barcelona', 'madrid en carretera', 'www.google.com', '2022-08-03'),
(3, 'Cardener', '5.6', 'Spain', 'Manresa', 'Bonita ruta por le río', 'www.google.com', '2022-08-02'),
(4, 'Entre castillos', '3.7', 'spain', 'Sagunto', 'madrid en carretera', 'www.google.com', '2022-08-02'),
(1, 'noname', '4.2', 'spain', 'madrid', 'madrid en carretera', 'www.google.com', '2022-08-02'),
(1, 'noname', '9.5', 'spain', 'madrid', 'madrid en carretera', 'www.google.com', '2022-08-02'),
(2, 'Cardener', '8.1', 'Spain', 'Manresa', 'Bonita ruta por le río', 'www.google.com', '2022-08-03'),
(2, 'noname', '6.7', 'spain', 'madrid', 'madrid en carretera', 'www.google.com', '2022-08-02'),
(1, 'noname', '7.3', 'spain', 'madrid', 'madrid en carretera', 'www.google.com', '2022-08-03'),
(1, 'Probando la creacion de rutas', '4.7', 'Creo', 'Ya', 'está terminada', 'www.google.com', '2022-08-03'),
(2, 'De Paseo', '9.9', 'spain', 'madrid', 'madrid en carretera', 'www.google.com', '2022-08-03'),
(5, 'De Paseo', '5.5', 'spain', 'madrid', 'madrid en carretera', 'www.google.com', '2022-08-03');

INSERT INTO favRoutes (userId, routeId)
VALUES 
(1, 1), (2, 1), (2, 2), (3, 4), (1, 4), (2, 4), (2, 3), (1, 3), (5, 1), (5, 2), (5, 6), (1, 6);

INSERT INTO routeData (routeId, userId, comments, rating, difficulty, dateRated)
VALUES 
('1','1','Bonita ruta para ir acompañado','5','3','2022-07-30'),
('2','2','Guauuuuuuu','4','2','2022-07-31');

-----------------------------------------------------------
/* JSON Entradas
ROUTES
{
  "routeName": "De Paseo Otra vez Nuevamente",
  "length": "7.6",
  "country": "spain",
  "city": "barcelona",
  "description": "barcelona en carretera",
  "url": "www.google.com"
} 



*/


-- User Profile
SELECT name, userName, email, city, description FROM users WHERE id=1;

-- Favourites
SELECT u.userName, r.country, r.city, r.routeName, r.length, r.description, r.url, r.created_at FROM favRoutes AS f
INNER JOIN users AS u ON f.userID=u.id
INNER JOIN routes AS r ON f.routeID=r.id
WHERE f.userId=1 ORDER BY routeId

-- My Routes
SELECT u.userName, r.country, r.city, r.routeName, r.length, r.description, r.url, r.created_at FROM routes AS r
INNER JOIN users AS u ON r.userID=u.id
WHERE r.userId=1 ORDER BY r.id


-- SEARCH
SELECT u.userName AS created_by, r.routeName, r.description, r.url, r.created_at FROM routes AS r
INNER JOIN users AS u ON r.userId=u.id
WHERE (r.routeName, r.country, r.city, r.description)::text ILIKE '%soria%';


