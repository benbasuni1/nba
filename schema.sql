CREATE DATABASE IF NOT EXISTS nba;
USE nba;

DROP TABLE IF EXISTS teams;
DROP TABLE IF EXISTS division;

CREATE TABLE division
(
  id int AUTO_INCREMENT NOT NULL PRIMARY KEY,
  name varchar(30) NOT NULL
);

CREATE TABLE teams
(
  id          int AUTO_INCREMENT NOT NULL,
  cityname    varchar(50) NOT NULL,
  teamname    varchar(50) NOT NULL,
  conference  varchar(4)   NOT NULL,
  division_id int NOT NULL,
  coach       varchar(20),
  PRIMARY KEY (id),
  FOREIGN KEY (division_id) REFERENCES division(id)
);

INSERT INTO division (name) VALUES 
('Atlantic'), ('Central'),
('Southeast'), ('Northwest'),
('Pacific'), ('Southwest');

INSERT INTO teams (cityname, teamname, conference, division_id) VALUES 
('Brooklyn', 'Nets', 'East', 1),
('Philadelphia', '76ers', 'East', 1),
('New York', 'Knicks', 'East', 1),
('Toronto', 'Raptors', 'East', 1),
('Boston', 'Celtics', 'East', 1),

('Chicago', 'Bulls', 'East', 2),
('Indiana', 'Pacers', 'East', 2),
('Milwaukee', 'Bucks', 'East', 2),
('Detroit', 'Pistons', 'East', 2),
('Cleveland', 'Cavaliers', 'East', 2),

('Atlanta', 'Hawks', 'East', 3),
('Orlando', 'Magic', 'East', 3),
('Charlotte', 'Hornets', 'East', 3),
('Miami', 'Heat', 'East', 3),
('Washington', 'Wizards', 'East', 3),

('Minnesota', 'Timberwolves', 'West', 4),
('Utah', 'Jazz', 'West', 4),
('Oklahoma City', 'Thunder', 'West', 4),
('Denver', 'Nuggets', 'West', 4),
('Portland', 'Trail Blazers', 'West', 4),

('Los Angeles', 'Lakers', 'West', 5),
('Sacramento', 'Kings', 'West', 5),
('Phoenix', 'Suns', 'West', 5),
('Los Angeles', 'Clippers', 'West', 5),
('Golden State', 'Warriors', 'West', 5),

('Houston', 'Rockets', 'West', 6),
('San Antonio', 'Spurs', 'West', 6),
('New Orleans', 'Pelicans', 'West', 6),
('Memphis', 'Grizzlies', 'West', 6),
('Dallas', 'Mavericks', 'West', 6);

