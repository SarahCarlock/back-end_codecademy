--PostgreSQL command prompt
  psql is the PostgreSQL interactive terminal. Running psql will connect you to a PostgreSQL host. Running psql --help will give you more information about the available options for connecting with psql:

  -h: --host=HOSTNAME: The database server host or socket directory; the default is local socket
  -p: --port=PORT: The database server port; the default is 5432
  -U: --username=USERNAME: The database username; the default is your_username
  -w: --no-password: Never prompt for password
  -W: --password: Force password prompt, which should happen automatically
  We’ll connect to the default postgres database with the default login information and no option flags:

