DROP TABLE IF EXISTS favRoutes;
DROP TABLE IF EXISTS routeData;
DROP TABLE IF EXISTS routes;
DROP TABLE IF EXISTS users;

DROP TABLE IF EXISTS CyClick;
DROP TABLE IF EXISTS cyclick;
CREATE DATABASE CyClick;

CREATE TABLE users (
    id          SERIAL   PRIMARY KEY,
    email       VARCHAR(120) NOT NULL,
    password    VARCHAR(120) NOT NULL,
    firstname   VARCHAR(30) NOT NULL,
    lastname    VARCHAR(120),
    country     VARCHAR(30),
    city        VARCHAR(30),
    description VARCHAR(500),
    imgProfile  VARCHAR(120),
    created_at  DATE,
    UNIQUE (email)
);

CREATE TABLE routes (
    id          SERIAL PRIMARY KEY,
    userId      INT REFERENCES users(id),
    routeName   VARCHAR(120) NOT NULL,
    routeLength VARCHAR(30) NOT NULL,
    country     VARCHAR(30) NOT NULL,
    city        VARCHAR(30) NOT NULL,
    routeType   VARCHAR(10) NOT NULL,
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
    routeId     INT REFERENCES routes(id),
    userId      INT REFERENCES users(id),
    comments    VARCHAR(500),
    rating      DEC(1) NOT NULL,
    difficulty  DEC(1) NOT NULL,
    dateRated   DATE,
    UNIQUE (userId)
);

INSERT INTO users (email, password, firstname, lastname, country, city, description, imgprofile, created_at) 
VALUES
('diego@ivan.com', 'abc', 'Diego', 'apellido', 'Spain', 'Manresa', 'Me gusta la bici', 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png', '2022-07-30'),
('laeken@mail.com', 'abc', 'Laeken', 'apellido', 'Spain', 'Manresa', 'Soy mas de caminar', 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png', '0022-08-02'),
('damian@correo.es', 'abc', 'Damian', 'apellido', 'Spain', 'Barcelona', 'I love biking', 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png', '2022-08-03'),
('ale@jandro.es', 'abc', 'Alejandro', 'apellido', 'Spain', 'Barcelona', 'No entiendo la vida sin mi bici', 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png', '2022-08-03'),
('housni@mail.com', 'abc', 'Housni', 'apellido', 'Spain', 'Barcelona', 'Me encanta la carretera en bici', 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png', '2022-07-31');

INSERT INTO routes (userId, routeName, routeLength, country, city, routeType, description, url, created_at) 
VALUES
(1, 'Manresa', '2.3', 'Spain', 'Manresa', 'road', 'Ruta por la montaña y carretera en Manresa', 'https://goo.gl/maps/nrjJ65c695Gp6ta36', '2022-07-30'),
(2, 'Collserola', '7.5', 'Spain', 'Barcelona', 'road', 'Ruta por la montaña y carretera en Barcelona', 'https://goo.gl/maps/nrjJ65c695Gp6ta36', '2022-07-31'),
(1, 'Barcelona', '6.1', 'spain', 'Barcelona', 'road', 'madrid en carretera', 'www.google.com', '2022-08-03'),
(3, 'Cardener', '5.6', 'Spain', 'Manresa', 'mountain', 'Bonita ruta por le río', 'www.google.com', '2022-08-02'),
(4, 'Entre castillos', '3.7', 'spain', 'Sagunto', 'mountain', 'madrid en carretera', 'www.google.com', '2022-08-02'),
(1, 'noname', '4.2', 'spain', 'madrid', 'road', 'madrid en carretera', 'www.google.com', '2022-08-02'),
(1, 'noname', '9.5', 'spain', 'madrid', 'road', 'madrid en carretera', 'www.google.com', '2022-08-02'),
(2, 'Cardener', '8.1', 'Spain', 'Manresa', 'mountain', 'Bonita ruta por le río', 'www.google.com', '2022-08-03'),
(2, 'noname', '6.7', 'spain', 'madrid', 'road', 'madrid en carretera', 'www.google.com', '2022-08-02'),
(1, 'noname', '7.3', 'spain', 'madrid', 'road', 'madrid en carretera', 'www.google.com', '2022-08-03'),
(1, 'Probando la creacion de rutas', '4.7', 'Creo', 'Ya', 'road', 'está terminada', 'www.google.com', '2022-08-03'),
(2, 'De Paseo', '9.9', 'spain', 'madrid', 'road', 'madrid en carretera', 'www.google.com', '2022-08-03'),
(5, 'De Paseo', '5.5', 'spain', 'madrid', 'road', 'madrid en carretera', 'www.google.com', '2022-08-03');

INSERT INTO favRoutes (userId, routeId)
VALUES 
(1, 1), (2, 1), (2, 2), (3, 4), (1, 4), (2, 4), (2, 3), (1, 3), (5, 1), (5, 2), (5, 6), (1, 6);

INSERT INTO routeData (routeId, userId, comments, rating, difficulty, dateRated)
VALUES 
('1','1','Bonita ruta para ir acompañado','5','3','2022-07-30'),
('2','2','Guauuuuuuu','4','2','2022-07-31');

