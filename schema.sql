DROP DATABASE IF EXISTS RestaurentInfo;

CREATE DATABASE RestaurentInfo;

USE RestaurentInfo;

CREATE TABLE Users (
  _id int NOT NULL AUTO_INCREMENT,
  username varchar(100),
  email varchar(100),
  streetAddress varchar(100),
  city varchar(50),
  states varchar(50),
  zip int NOT Null,
  phone varchar(50),

);

CREATE TABLE Restaurents (
  _id int NOT NULL AUTO_INCREMENT,
  category varchar(100) NOT NULL,
  restaurantName varchar(100),
  streetAddress varchar(100),
  city varchar(100),
  states varchar(100),
  zip int NotNull,
  phone varchar(50),
  webAddress varchar(100),
  menuAddress varchar(100),
  PRIMARY KEY (_id)
)


CREATE TABLE Reviews (
  _id INT NOT NULL AUTO_INCREMENT,
  user_id INT NOT NULL,
  restaurant_id INT NOT NULL,
  comment VARCHAR(255) NOT NULL,
  rating INT NOT NULL,
  date DATE,
  PRIMARY KEY (id)
);

