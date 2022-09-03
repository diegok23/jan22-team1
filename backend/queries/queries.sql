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

INSERT INTO users (email, password, firstname, lastname, country, city, description, imgprofile, created_at) VALUES
('diego@ivan.com', '$2a$08$jKeYabf8Wwg6cBAKdViTyeD7s0sVZngAW77K/nujDG.M5kgKGhfNu', 'Diego', 'K', 'Spain', 'Manresa', 'Me gustan las rutas de montaña', 'https://github.com/diegok23/jan22-team1/blob/main/maqueta-fp/src/img/pf_male.png', '2022-07-30');
('laeken@mail.com', '$2a$08$6fuUgfSmJfU1d01AfsnltuAFbB/yL31.zgyccf/7pGbtQMV2TYO2y', 'Laeken', 'R', 'Spain', 'Manresa', 'El ciclismo es mi vida', 'https://github.com/diegok23/jan22-team1/blob/main/maqueta-fp/src/img/pf_male.png', '0022-08-02');
('damian@correo.es', '$2a$08$oU9DpFFWlW71pPNLZDk4rO4LQFaryPj1669CJ/foVEn06K98qH2OW', 'Damian', 'MR', 'Spain', 'Barcelona', 'Me gustan las rutas de montaña', 'https://github.com/diegok23/jan22-team1/blob/main/maqueta-fp/src/img/pf_male.png', '2022-08-03');
('ale@jandro.es', '$2a$08$.YXCRzMTBflnPu6I.hLpLuWvUYTBJ2vQMKUVaoovBkl9ZMTJvGOEG', 'Alejandro', 'SG', 'Spain', 'Barcelona', 'No entiendo la vida sin mi bici', 'https://github.com/diegok23/jan22-team1/blob/main/maqueta-fp/src/img/pf_male.png', '2022-08-03');
('housni@mail.com', '$2a$08$zh9SAy0g8T5EJ/t11h937edk5LlXmeH.8xVJ4.pq8TQTc2WsHQbEe', 'Housni', 'A', 'Spain', 'Barcelona', 'Me encanta coger la carretera en bicicleta', 'https://github.com/diegok23/jan22-team1/blob/main/maqueta-fp/src/img/pf_male.png', '2022-07-31');

INSERT INTO routes (userId, routeName, routeLength, country, city, routeType, description, url, created_at) 
VALUES
(1, 'Manresa', '18', 'Spain', 'Manresa', 'Mountain', 'Ruta por la montaña y carretera en Manresa', 'https://goo.gl/maps/7EhSXecr1LcMvbgY6', '2022-07-30'),
(2, 'Collserola', '3.5', 'Spain', 'Barcelona', 'Mountain', 'This challenging trail starts with a steep descent over roots and loose terrain. The second half is less steep but keeps the roots for a fun and rowdy descent. At the end you can continue along Paleolitico or Lorenzo´s Extended for a really fun ride. Enjoy it! ', 'https://goo.gl/maps/tTmuLMgCvtEvWm2C9', '2022-07-31'),
(1, 'Barcelona', '14.8', 'Spain', 'Barcelona', 'Mountain', 'A long and easy ride with a lot of fun in the first half and graveled road in the second half. Take care, a lot of people riding here and also walking. It´s a great place for beginners.', 'https://goo.gl/maps/7ukXcDF2x2z2vF8o6', '2022-08-03'),
(3, 'Odena-Fonollosa', '26', 'Spain', 'Odena', 'Road', 'Bonita ruta por le río', 'https://goo.gl/maps/3UQdYCECTfLZyTfo6', '2022-08-02'),
(4, 'Aiguafreda Loop', '18', 'Spain', 'Aiguafreda', 'Mountain', 'Head through the northern slopes of Montseny. Starting from Aiguafreda, head along the Picamena stream and turn right to take a track that will go up for a long time. After arriving at the Pla de la Calma, continue to ascend to the top of the Sui, the fourth highest mountain in the Montseny.', 'https://goo.gl/maps/KnxirY4rwawvhWAx9', '2022-08-02'),
(1, 'El Pardo-Mingorrubio', '4.2', 'Spain', 'Madrid', 'Road', 'Easy to ride with a nice landscape to an abandoned rail track. Perfect to introduce kids to mountain biking.', 'https://goo.gl/maps/tyum8tvMTMsNVE9u6', '2022-08-02'),
(5, 'Manzanares-El Pardo', '9.5', 'Spain', 'Madrid', 'Road', 'Easy to ride with a nice landscape to an abandoned rail track. Perfect to introduce kids to mountain biking.', 'https://goo.gl/maps/c1EBcfMEJHT3NYkM6', '2022-08-02'),
(2, 'Los Gamos-Canchal', '8.1', 'Spain', 'Madrid', 'Mountain', 'Bonita ruta por le río', 'https://goo.gl/maps/Warm7Tvob5T3tarL9', '2022-08-03'),
(4, 'Matadepera-Mura', '27', 'Spain', 'Barcelona', 'Road', 'This challenging trail starts with a steep descent over roots and loose terrain. The second half is less steep but keeps the roots for a fun and rowdy descent. At the end you can continue along Paleolitico or Lorenzo´s Extended for a really fun ride. Enjoy it! ', 'https://goo.gl/maps/u6YzLhToLohdnRn38', '2022-08-02'),
(1, 'Manresa', '6.5', 'Spain', 'Manresa', 'Mountain', 'Ruta por la montaña y carretera en Manresa', 'https://goo.gl/maps/Doakd17b5nmrLvF29', '2022-08-03'),

INSERT INTO favRoutes (userId, routeId)
VALUES 
(1, 1), (2, 1), (2, 2), (3, 4), (1, 4), (2, 4), (2, 3), (1, 3), (5, 1), (5, 2), (5, 6), (1, 6);

INSERT INTO routeData (routeId, userId, comments, rating, difficulty, dateRated)
VALUES 
('1','1','Bonita ruta para ir acompañado','5','3','2022-07-30'),
('2','2','Guauuuuuuu','4','2','2022-07-31');

