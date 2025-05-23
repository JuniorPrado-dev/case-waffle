-- Active: 1740117052385@@127.0.0.1@5435@user_db
CREATE TABLE IF NOT EXISTS "players" (
    id VARCHAR(255) PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    scores INT NOT NULL,
    last_check_date BIGINT NOT NULL
);
CREATE TABLE IF NOT EXISTS "access" (
    id VARCHAR(255) PRIMARY KEY,
    id_post VARCHAR(255), 
    utm_source VARCHAR(255), 
    utm_medium VARCHAR(255), 
    utm_campaign VARCHAR(255), 
    utm_channel VARCHAR(255), 
    email VARCHAR(255),
    status VARCHAR(255),
    created_at BIGINT,
    CONSTRAINT fk_player
    FOREIGN KEY (email)
    REFERENCES players(email)
    ON DELETE CASCADE 
);