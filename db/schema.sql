CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
	id INTEGER(10) null,
    burger_name VARCHAR(10) null,
    devoured boolean not null default 0
)