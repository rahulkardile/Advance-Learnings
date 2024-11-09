CREATE DATABASE college;
CREATE DATABASE IF NOT EXISTS college;

USE college;

CREATE TABLE student (
	id INT PRIMARY KEY,
    name VARCHAR(50),
    age INT NOT NULL
);

INSERT INTO student VALUES(1, "Rahul Kardile", 21);
INSERT INTO student VALUES(2, "Suraj Mate", 20);
INSERT INTO student VALUES(3, "Rahul Sonawane", 22);
INSERT INTO student VALUES(4, "Shubh sawai", 21);

SELECT * FROM student;