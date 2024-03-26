CREATE TABLE "dogs" (
  "id" integer PRIMARY KEY,
  "scientific_name" varchar,
  "description" varchar,
  "working" varchar,
  "herding" varchar,
  "hound" varchar,
  "sporting" varchar,
  "non_sporting" varchar,
  "terrier" varchar,
  "toy" varchar
);

CREATE TABLE "working" (
  "working_id" integer PRIMARY KEY,
  "working_name" integer,
  "description" varchar
);

CREATE TABLE "herding" (
  "herding_id" integer PRIMARY KEY,
  "herding_name" integer,
  "description" varchar
);

CREATE TABLE "hound" (
  "hound_id" integer PRIMARY KEY,
  "hound_name" integer,
  "description" varchar
);

CREATE TABLE "sporting" (
  "sporting_id" integer PRIMARY KEY,
  "sporting_name" integer,
  "description" varchar
);

CREATE TABLE "non_sporting" (
  "non_sporting_id" integer PRIMARY KEY,
  "non_sporting_name" integer,
  "description" varchar
);

CREATE TABLE "terrier" (
  "terrier_id" integer PRIMARY KEY,
  "terrier_name" integer,
  "description" varchar
);

CREATE TABLE "toy" (
  "toy_id" integer PRIMARY KEY,
  "toy_name" integer,
  "description" varchar
);
