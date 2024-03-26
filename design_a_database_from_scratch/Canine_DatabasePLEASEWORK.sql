CREATE TABLE "dogs" (
  "id" serial PRIMARY KEY,
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
  "working_id" serial PRIMARY KEY,
  "working_name" varchar,
  "description" varchar
);

CREATE TABLE "herding" (
  "herding_id" serial PRIMARY KEY,
  "herding_name" varchar,
  "description" varchar
);

CREATE TABLE "hound" (
  "hound_id" serial PRIMARY KEY,
  "hound_name" varchar,
  "description" varchar
);

CREATE TABLE "sporting" (
  "sporting_id" serial PRIMARY KEY,
  "sporting_name" varchar,
  "description" varchar
);

CREATE TABLE "non_sporting" (
  "non_sporting_id" serial PRIMARY KEY,
  "non_sporting_name" varchar,
  "description" varchar
);

CREATE TABLE "terrier" (
  "terrier_id" serial PRIMARY KEY,
  "terrier_name" varchar,
  "description" varchar
);

CREATE TABLE "toy" (
  "toy_id" serial PRIMARY KEY,
  "toy_name" varchar,
  "description" varchar
);

ALTER TABLE "working" ADD FOREIGN KEY ("working_name") REFERENCES "dogs" ("working");

ALTER TABLE "herding" ADD FOREIGN KEY ("herding_name") REFERENCES "dogs" ("herding");

ALTER TABLE "hound" ADD FOREIGN KEY ("hound_name") REFERENCES "dogs" ("hound");

ALTER TABLE "sporting" ADD FOREIGN KEY ("sporting_name") REFERENCES "dogs" ("sporting");

ALTER TABLE "non_sporting" ADD FOREIGN KEY ("non_sporting_name") REFERENCES "dogs" ("non_sporting");

ALTER TABLE "terrier" ADD FOREIGN KEY ("terrier_name") REFERENCES "dogs" ("terrier");

ALTER TABLE "toy" ADD FOREIGN KEY ("toy_name") REFERENCES "dogs" ("toy");
