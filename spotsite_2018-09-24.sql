# ************************************************************
# Sequel Pro SQL dump
# Versión 4541
#
# http://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Host: 127.0.0.1 (MySQL 5.7.21)
# Base de datos: spotsite
# Tiempo de Generación: 2018-09-24 08:13:01 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Volcado de tabla comentarios
# ------------------------------------------------------------

DROP TABLE IF EXISTS `comentarios`;

CREATE TABLE `comentarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `comentario` text,
  `idUser` int(11) DEFAULT NULL,
  `idZona` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `comentarios` WRITE;
/*!40000 ALTER TABLE `comentarios` DISABLE KEYS */;

INSERT INTO `comentarios` (`id`, `comentario`, `idUser`, `idZona`)
VALUES
	(77,'Este sitio es genial! Siempre que vamos acabamos cansadisimos, muchisimas opciones para practicar.',4,6),
	(78,'No tengo imagen, pero entrenar aquí me encanta',2,6),
	(79,'¿Quedamos el jueves a la tarde? ',2,6),
	(80,'Yo no puedo socios, estoy ya viejete',3,6),
	(81,'Barbacoa en mi casa despues de entrenar, fols lleva cervezas',1,6),
	(82,'\nEste sitio es genial! Siempre que vamos acabamos cansadisimos, muchisimas opciones para practicar.',3,7),
	(83,'El sitio es la caña',2,7),
	(84,'Me encanta este sitio',3,7),
	(87,'¿Esta bien el sitio? Nunca fui alli',1,7),
	(88,'El sitio es la caña',2,8),
	(89,'Me encanta este sitio',3,8),
	(90,'Demasiada gente',2,8),
	(91,'¿Esta bien el sitio? Nunca fui alli',1,8),
	(98,'El sitio es la caña',2,9),
	(99,'Me encanta este sitio',3,9),
	(100,'Demasiada gente',2,9),
	(101,'¿Esta bien el sitio? Nunca fui alli',1,9),
	(102,'¿Esta bien el sitio? Nunca fui alli',1,9),
	(103,'El sitio es la caña',2,10),
	(104,'Me encanta este sitio',3,10),
	(105,'Demasiada gente',2,10),
	(106,'¿Esta bien el sitio? Nunca fui alli',4,10),
	(107,'¿Esta bien el sitio? Nunca fui alli',1,10),
	(108,'El sitio es la caña',2,11),
	(109,'Me encanta este sitio',3,11);

/*!40000 ALTER TABLE `comentarios` ENABLE KEYS */;
UNLOCK TABLES;


# Volcado de tabla favoritos
# ------------------------------------------------------------

DROP TABLE IF EXISTS `favoritos`;

CREATE TABLE `favoritos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `idUser` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Volcado de tabla imagenes
# ------------------------------------------------------------

DROP TABLE IF EXISTS `imagenes`;

CREATE TABLE `imagenes` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `url` varchar(30) DEFAULT NULL,
  `alt` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `imagenes` WRITE;
/*!40000 ALTER TABLE `imagenes` DISABLE KEYS */;

INSERT INTO `imagenes` (`id`, `url`, `alt`)
VALUES
	(1,'zona1.jpg','zona1'),
	(2,'edge.jpg','edge'),
	(3,'salto.jpg','salto'),
	(4,'logo.png','logo');

/*!40000 ALTER TABLE `imagenes` ENABLE KEYS */;
UNLOCK TABLES;


# Volcado de tabla imagenesZonas
# ------------------------------------------------------------

DROP TABLE IF EXISTS `imagenesZonas`;

CREATE TABLE `imagenesZonas` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `src` varchar(30) DEFAULT NULL,
  `alt` varchar(30) DEFAULT NULL,
  `idZona` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `idZona` (`idZona`),
  CONSTRAINT `idZona` FOREIGN KEY (`idZona`) REFERENCES `zonas` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `imagenesZonas` WRITE;
/*!40000 ALTER TABLE `imagenesZonas` DISABLE KEYS */;

INSERT INTO `imagenesZonas` (`id`, `src`, `alt`, `idZona`)
VALUES
	(1,'almendros1.jpg','almendros1',8),
	(2,'almendros2.jpg','almendros2',8),
	(3,'blancas1.jpg','blancas1',7),
	(4,'blancas2.jpg','blancas2',7),
	(5,'ceas1.jpg','ceas1',9),
	(6,'ceas2.jpg','ceas2',9),
	(7,'ceas3.jpg','ceas3',9),
	(8,'vaguada1.jpg','vaguada1',6),
	(9,'vaguada2.jpg','vaguada2',6),
	(10,'vaguada3.jpg','vaguada3',6),
	(11,'vaguada2.jpg',NULL,10),
	(12,'vaguada3.jpg','',11),
	(13,'almendros2.jpg',NULL,12),
	(14,'blancas2.jpg',NULL,13),
	(15,'ceas3.jpg',NULL,14),
	(19,'sgm24DTqDAD.png','prueba',18);

/*!40000 ALTER TABLE `imagenesZonas` ENABLE KEYS */;
UNLOCK TABLES;


# Volcado de tabla users
# ------------------------------------------------------------

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(30) NOT NULL,
  `apellido` varchar(30) NOT NULL,
  `alias` varchar(30) NOT NULL,
  `email` varchar(40) NOT NULL DEFAULT '',
  `password` varchar(30) NOT NULL,
  `imagen` varchar(30) DEFAULT NULL,
  `token` varchar(255) DEFAULT NULL,
  `ciudad` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;

INSERT INTO `users` (`id`, `nombre`, `apellido`, `alias`, `email`, `password`, `imagen`, `token`, `ciudad`)
VALUES
	(1,'victor','miguez','lobus','lobustpk@hotmail.com','123456','victor.jpg','zvKZGS6OKRy','zamora'),
	(2,'carlos','cuesta','eyEse','carloscuesta@hotmail.com','123456','default.jpg','oz1Wyw7kC67','zamora'),
	(3,'sergio','sanchez','fols','pantumaca@hotmail.com','123456','felix.jpg','U9HZtmwEGwz','zamora'),
	(4,'felix','gutter','fel','felix@felix.com','123456','felix.jpg','ADY8Z2Lt0n9','bremen'),
	(12,'nombre','apellido','esee','a@a.com','123456','default.jpg',NULL,'bremen'),
	(13,'pruebaima','pruebaimg','prueba1234','1234@a.com','123456','default.jpg','geXFtjakm3I',NULL);

/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;


# Volcado de tabla zonas
# ------------------------------------------------------------

DROP TABLE IF EXISTS `zonas`;

CREATE TABLE `zonas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(30) DEFAULT NULL,
  `direccion` varchar(35) NOT NULL,
  `barrio` varchar(20) NOT NULL,
  `ciudad` varchar(15) DEFAULT NULL,
  `lat` float DEFAULT NULL,
  `lng` float DEFAULT NULL,
  `idUser` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `idUser` (`idUser`),
  CONSTRAINT `idUser` FOREIGN KEY (`idUser`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `zonas` WRITE;
/*!40000 ALTER TABLE `zonas` DISABLE KEYS */;

INSERT INTO `zonas` (`id`, `nombre`, `direccion`, `barrio`, `ciudad`, `lat`, `lng`, `idUser`)
VALUES
	(6,'La vaguada','Calle campo de marte','pantoja','zamora',41.5107,-5.74685,NULL),
	(7,'Peña trevinca','Calle Peña Trevinca','peña trevinca','zamora',41.5131,-5.75033,NULL),
	(8,'los almendros','Calle villalpando','san lazaro','salamanca',41.5079,-5.74941,4),
	(9,'Ceas','Calle de Peña Trevinca','peña trevinca','salamanca',41.5144,-5.75012,4),
	(10,'Viriato','Plaza de viriato','Centro','zamora',NULL,NULL,4),
	(11,'San Martin','Centro','Centro','zamora',NULL,NULL,4),
	(12,'Las viñas','Cardenal cisneros','Las viñas','zamora',NULL,NULL,3),
	(13,'Valorio','valorio','valorio','zamora',NULL,NULL,3),
	(14,'Vista Alegre','','','zamora',NULL,NULL,3),
	(18,'prueba','prueba','prueba','zamora',NULL,NULL,4);

/*!40000 ALTER TABLE `zonas` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
