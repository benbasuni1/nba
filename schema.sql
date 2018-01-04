CREATE DATABASE IF NOT EXISTS nba;
USE nba;

DROP TABLE IF EXISTS teams;
DROP TABLE IF EXISTS division;
DROP TABLE IF EXISTS pts_leader;
DROP TABLE IF EXISTS ast_leader;
DROP TABLE IF EXISTS reb_leader;

CREATE TABLE division
(
  id int AUTO_INCREMENT NOT NULL PRIMARY KEY,
  name varchar(30) NOT NULL
);

CREATE TABLE teams
(
  id          int AUTO_INCREMENT NOT NULL,
  team_id     int NOT NULL,
  cityname    varchar(50) NOT NULL,
  teamname    varchar(50) NOT NULL,
  conference  varchar(4)  NOT NULL,
  abbr        varchar(3)  NOT NULL,
  division_id int NOT NULL,
  coach       varchar(20),
  PRIMARY KEY (id),
  FOREIGN KEY (division_id) REFERENCES division(id)
);

CREATE TABLE pts_leader
(
  id          int AUTO_INCREMENT NOT NULL,
  player_id   int         NOT NULL,
  playername  varchar(50) NOT NULL,
  team        varchar(50) NOT NULL,
  gp          int         NOT NULL,
  pts         int         NOT NULL,
  ppg         float       NOT NULL,
  PRIMARY KEY (id),
  UNIQUE (id)
);

CREATE TABLE ast_leader
(
  id          int AUTO_INCREMENT NOT NULL,
  player_id   int         NOT NULL,
  playername  varchar(50) NOT NULL,
  team        varchar(50) NOT NULL,
  gp          int         NOT NULL,
  ast         int         NOT NULL,
  apg         float       NOT NULL,
  PRIMARY KEY (id),
  UNIQUE (id)
);

CREATE TABLE reb_leader
(
  id          int AUTO_INCREMENT NOT NULL,
  player_id   int         NOT NULL,
  playername  varchar(50) NOT NULL,
  team        varchar(50) NOT NULL,
  gp          int         NOT NULL,
  reb         int         NOT NULL,
  rpg         float       NOT NULL,
  PRIMARY KEY (id),
  UNIQUE (id)
);

INSERT INTO division (name) VALUES 
('Atlantic'), ('Central'),
('Southeast'), ('Northwest'),
('Pacific'), ('Southwest');

INSERT INTO teams (cityname, team_id, teamname, conference, abbr, division_id) VALUES 
('Brooklyn', 1610612751, 'Nets', 'East', 'BKN', 1),
('Philadelphia', 1610612755, '76ers', 'East', 'PHI',  1),
('New York', 1610612752, 'Knicks', 'East', 'NYK', 1),
('Toronto', 1610612761, 'Raptors', 'East', 'TOR', 1),
('Boston', 1610612738, 'Celtics', 'East', 'BOS', 1),

('Chicago', 1610612741, 'Bulls', 'East', 'CHI', 2),
('Indiana', 1610612754, 'Pacers', 'East', 'IND', 2),
('Milwaukee', 1610612749, 'Bucks', 'East', 'MIL', 2),
('Detroit', 1610612765, 'Pistons', 'East', 'DET', 2),
('Cleveland', 1610612739, 'Cavaliers', 'East', 'CLE', 2),

('Atlanta', 1610612737, 'Hawks', 'East', 'ATL', 3),
('Orlando', 1610612753, 'Magic', 'East', 'ORL', 3),
('Charlotte', 1610612766, 'Hornets', 'East', 'CHA', 3),
('Miami', 1610612748, 'Heat', 'East', 'MIA', 3),
('Washington', 1610612764, 'Wizards', 'East', 'WAS', 3),

('Minnesota', 1610612750, 'Timberwolves', 'West', 'MIN', 4),
('Utah', 1610612762, 'Jazz', 'West', 'UTA', 4),
('Oklahoma City', 1610612760, 'Thunder', 'West', 'OKC', 4),
('Denver', 1610612743, 'Nuggets', 'West', 'DEN', 4),
('Portland', 1610612757, 'Trail Blazers', 'West', 'POR', 4),

('Los Angeles', 1610612747, 'Lakers', 'West', 'LAL', 5),
('Sacramento', 1610612758, 'Kings', 'West', 'SAC', 5),
('Phoenix', 1610612756, 'Suns', 'West', 'PHO', 5),
('Los Angeles', 1610612746, 'Clippers', 'West', 'LAC', 5),
('Golden State', 1610612744, 'Warriors', 'West', 'GSW', 5),

('Houston', 1610612745, 'Rockets', 'West', 'HOU', 6),
('San Antonio', 1610612759, 'Spurs', 'West', 'SAS', 6),
('New Orleans', 1610612740, 'Pelicans', 'West', 'NOP', 6),
('Memphis', 1610612763, 'Grizzlies', 'West', 'MEM', 6),
('Dallas', 1610612742, 'Mavericks', 'West', 'DAL', 6);

