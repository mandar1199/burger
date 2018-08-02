CREATE DATABASE burgers1_db;
USE burgers1_db;

CREATE TABLE burgers (
    id INT AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR(100),
    devoured BOOL DEFAULT false,
    PRIMARY KEY (id)
);