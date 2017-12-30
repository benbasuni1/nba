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
  conference  varchar(4)  NOT NULL,
  abbr        varchar(3)  NOT NULL,
  division_id int NOT NULL,
  coach       varchar(20),
  PRIMARY KEY (id),
  FOREIGN KEY (division_id) REFERENCES division(id)
);

INSERT INTO division (name) VALUES 
('Atlantic'), ('Central'),
('Southeast'), ('Northwest'),
('Pacific'), ('Southwest');

INSERT INTO teams (cityname, teamname, conference, abbr, division_id) VALUES 
('Brooklyn', 'Nets', 'East', 'BKN', 1),
('Philadelphia', '76ers', 'East', 'PHI',  1),
('New York', 'Knicks', 'East', 'NYK', 1),
('Toronto', 'Raptors', 'East', 'TOR', 1),
('Boston', 'Celtics', 'East', 'BOS', 1),

('Chicago', 'Bulls', 'East', 'CHI', 2),
('Indiana', 'Pacers', 'East', 'IND', 2),
('Milwaukee', 'Bucks', 'East', 'MIL', 2),
('Detroit', 'Pistons', 'East', 'DET', 2),
('Cleveland', 'Cavaliers', 'East', 'CLE', 2),

('Atlanta', 'Hawks', 'East', 'ATL', 3),
('Orlando', 'Magic', 'East', 'ORL', 3),
('Charlotte', 'Hornets', 'East', 'CHA', 3),
('Miami', 'Heat', 'East', 'MIA', 3),
('Washington', 'Wizards', 'East', 'WAS', 3),

('Minnesota', 'Timberwolves', 'West', 'MIN', 4),
('Utah', 'Jazz', 'West', 'UTA', 4),
('Oklahoma City', 'Thunder', 'West', 'OKC', 4),
('Denver', 'Nuggets', 'West', 'DEN', 4),
('Portland', 'Trail Blazers', 'West', 'POR', 4),

('Los Angeles', 'Lakers', 'West', 'LAL', 5),
('Sacramento', 'Kings', 'West', 'SAC', 5),
('Phoenix', 'Suns', 'West', 'PHO', 5),
('Los Angeles', 'Clippers', 'West', 'LAC', 5),
('Golden State', 'Warriors', 'West', 'GSW', 5),

('Houston', 'Rockets', 'West', 'HOU', 6),
('San Antonio', 'Spurs', 'West', 'SAS', 6),
('New Orleans', 'Pelicans', 'West', 'NOP', 6),
('Memphis', 'Grizzlies', 'West', 'MEM', 6),
('Dallas', 'Mavericks', 'West', 'DAL', 6);

