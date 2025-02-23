-- Active: 1740117052385@@127.0.0.1@5435@user_db
CREATE TABLE "players" (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) ,
    email VARCHAR(255) NOT NULL UNIQUE,
    scores INT NOT NULL,
    last_check_date TIMESTAMP NOT NULL,
);
CREATE TABLE "access_info" (
    id VARCHAR(255) PRIMARY KEY,
    utm_source VARCHAR 
    utm_medium VARCHAR 
    utm_campaign VARCHAR 
    utm_channel VARCHAR 
    player_id VARCHAR(255),     
    CONSTRAINT fk_player
    FOREIGN KEY (player_id)
    REFERENCES players(id)
    ON DELETE CASCADE 
);