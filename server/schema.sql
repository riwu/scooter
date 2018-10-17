CREATE DATABASE  IF NOT EXISTS `scooter`;
CREATE TABLE `scooter` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `position` point NOT NULL,
  PRIMARY KEY (`id`)
);