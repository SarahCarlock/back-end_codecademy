//The following code is attempting to register a user using passport-local.
app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  const newUser = await db.users.createUser({ username, password });
  if (newUser) {
    res.status(201).json({
      msg: "Insert Success Message Here",
      newUser
    });
  } else {
    res.status(500).json({ msg: "Insert Failure Message Here" });
  }
}

//The following code is using bcrypt.js to secure a password.
    const passwordHash = async (password, saltRounds) => {
  try {
    const salt = await bcrypt.genSalt(saltRounds);
    return await bcrypt.hash(password, salt);
  } catch (err) {
    console.log(err);
  }
  return null;
};

//The following code is attempting to log out a user using passport-local.
app.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/login");
});

//The following code is attempting to set up Passport’s local strategy.
    passport.use(new LocalStrategy(
  function (username, password, done) {
    // Look up user in the db
    db.users.findByUsername(username, (err, user) => {
      
      if(err) return done(err);

      if(!user) return done(null, false);

      if(user.password != password) return done(null, false);

      return done(null, user);
    });
  })
);

//Fill in the blanks to create a true statement about Rainbow Tables and Salts.
   /* A rainbow table is a massive table of common passwords and password-hash combinations used by attackers to break into accounts. 
    One common technique we can take to protect ourselves from rainbow table attacks is the use of salts.*/

//The following code is attempting to register a user using passport-local.
app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  const newUser = await ______({ username, password }); <------ We need to try and create a newUser from the database.
  if (newUser) {
    res.status(201).json({
      msg: "Insert Success Message Here",
      newUser
    });
  } else {
    res.status(500).json({ msg: "Insert Failure Message Here" });
  }
}

//The following code is attempting to log in a user and redirect them to their profile using passport-local.
app.post("/login",
  passport.authenticate("local", { failureRedirect : "/login"}),
  (req, res) => {
    res.redirect("profile");
  }
);

app.get("/profile", (req, res) => {
  res.render("profile", { user: req.user });
}); 

//The following code is attempting to serialize and deserialize a user using passport-local.
passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  db.users.findById(id, function (err, user) {
    if (err) return done(err); 
    done(null, user);
  });
});

//The following code is attempting to log out a user using passport-local.
app.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/login");
});

//The following code is attempting to log in a user and redirect them to their profile using passport-local.
app.post("/login",
  passport.authenticate("local", { failureRedirect : "/login"}),
  (req, res) => {
    res.redirect("profile");
  }
);

app.get("/profile", (req, res) => {
  res.render("profile", { user: req.user });
}); 

//What is the definition of Hashing? a one-way process that takes data of any size and represents it as a unique value of a fixed size.

//The following code is attempting to set up Passport’s local strategy.
passport.use(new LocalStrategy(
  function (username, password, done) {
    // Look up user in the db
    db.users.findByUsername(username, (err, user) => {
      // There was an error in the database lookup
      if(err) return done(err, user);

      // A user was NOT found and there was NO error
      if(!user) return done(null, false);

      // A user was found, but the password was NOT valid
      if(user.password != password) return done(null, false);

      // There was no error, the user and password are valid
      return done(null, user)
    });
  })
);

//The following code is using bcrypt.js to verify a password against a stored password hash.
const comparePasswords = async (password, hash) => {
  try {
    const matchFound = await bcrypt.compare(password, hash);
    return matchFound;
  } catch (err) {
    console.log(err);
  }
  return false;
};