

-psql postgres
  You’ll see that we’ve entered into a new connection. We’re now inside psql in the postgres database. The prompt ends with a # to denote that we’re logged in as the superuser, or root:

  postgres=#
  Commands within psql start with a backslash \. To test our first command, we can check what database, user, and port we’ve connected to using the \conninfo command.

  postgres=# \conninfo
  You are connected to database "postgres" as user "your_username" via socket in "/tmp" at port "5432".
  The reference table below includes a few common commands that we’ll use throughout this tutorial:

  \q: Exit psql connection
  \c: Connect to a new database
  \dt: List all tables
  \du: List all roles
  \list: List databases
  Let’s create a new database and user so we’re not using the default accounts, which have superuser privileges.


--Creating a role in Postgres
  First, we’ll create a role called me and give it a password of password. A role can function as a user or a group. In this case, we’ll use it as a user:

  postgres=# CREATE ROLE me WITH LOGIN PASSWORD 'password';
  We want me to be able to create a database:

  postgres=# ALTER ROLE me CREATEDB;
  You can run \du to list all roles and users:

  me          | Create DB                           | {}
  postgres    | Superuser, Create role, Create DB   | {}
  Now, we want to create a database from the me user. Exit from the default session with \q for quit:

  postgres=# \q
  We’re back in our computer’s default terminal connection. Now, we’ll connect postgres with me:

  psql -d postgres -U me
  Instead of postgres=#, our prompt now shows postgres=> , meaning we’re no longer logged in as a superuser.

--Creating a database in Postgres
  We can create a database with the SQL command as follows:

  postgres=> CREATE DATABASE api;
  Use the \list command to see the available databases:

  Name    |    Owner    | Encoding |   Collate   |    Ctype    |
  api     | me          | UTF8     | en_US.UTF-8 | en_US.UTF-8 |
  Let’s connect to the new api database with me using the \c connect command:

  postgres=> \c api
  You are now connected to database "api" as user "me".
  api=>
  Our prompt now shows that we’re connected to api.

--Creating a table in Postgres
  Finally, in the psql command prompt, we’ll create a table called users with three fields, two VARCHAR types, and an auto-incrementing PRIMARY KEY ID:

  api=>
  CREATE TABLE users (
    ID SERIAL PRIMARY KEY,
    name VARCHAR(30),
    email VARCHAR(30)
  );
  Make sure not to use the backtick ` character when creating and working with tables in PostgreSQL. While backticks are allowed in MySQL, they’re not valid in PostgreSQL. Also ensure that you do not have a trailing comma in the CREATE TABLE command.

Let’s add some data to work with by adding two entries to users:

INSERT INTO users (name, email)
  VALUES ('Jerry', 'jerry@example.com'), ('George', 'george@example.com');
Let’s make sure that the information above was correctly added by getting all entries in users:

api=> SELECT * FROM users;
id |  name  |       email        
----+--------+--------------------
  1 | Jerry  | jerry@example.com
  2 | George | george@example.com
Now, we have a user, database, table, and some data. We can begin building our Node.js RESTful API to connect to this data, stored in a PostgreSQL database.

At this point, we’re finished with all of our PostgreSQL tasks, and we can begin setting up our Node.js app and Express server.