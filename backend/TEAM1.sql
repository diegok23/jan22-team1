-- Create a new database called 'Team1'
CREATE DATABASE Team1
-- Users Table
CREATE TABLE Users(
  "user_id" SERIAL PRIMARY KEY,
  "username" VARCHAR(30) NOT NULL,
  "email" VARCHAR(120) NOT NULL,
  "password" VARCHAR(120) NOT NULL,
  "created_at" DATE DEFAULT CURRENT_DATE
)