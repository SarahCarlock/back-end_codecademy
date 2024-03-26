const express = require("express");
const app = express();
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const session = require("express-session");
const PORT = process.env.PORT || 5000;

app.use(
  session({
    secret: "secret-key",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

// Complete the serializeUser function below:
passport.serializeUser((user, done) => {
  done(null, user.id);
});

// Complete the deserializeUser function below:
passport.deserializeUser((id, done) => {
  db.users.findById(id, function (err, user) {
    if (err) return done(err);
    done(null, user);
  });
};
  
);

passport.use(
  new LocalStrategy(function (username, password, done) {
    db.users.findByUsername(username, (err, user) => {
      if (err) {
        return done(err);
      }
      if (!user) {
        return done(null, false);
      }
      if (user.password != password) {
        return done(null, false);
      }
      return done(null, user);
    });
  })
);

app.get("/", (req, res) => {
  res.send("Hello from the homepage!");
});

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});


//////// Logging In
const express = require("express");
const app = express();
const session = require("express-session");
const store = new session.MemoryStore();
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const db = require("./db");
const PORT = process.env.PORT || 4001;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.use(
  session({
    secret: "secret-key",
    resave: false,
    saveUninitialized: false,
    store,
  })
);

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  // Look up user id in database.
  db.users.findById(id, function (err, user) {
    if (err) {
      return done(err);
    }
    done(null, user);
  });
});

passport.use(
  new LocalStrategy(function (username, password, cb) {
    db.users.findByUsername(username, function (err, user) {
      if (err) {
        return cb(err);
      }
      if (!user) {
        return cb(null, false);
      }
      if (user.password != password) {
        return cb(null, false);
      }
      return cb(null, user);
    });
  })
);

app.get("/login", (req, res) => {
  res.render("login");
});

app.get("/profile", (req, res) => {
  // Pass user object stored in session to the view page:
  res.render("profile", {user: req.user});
});

// Add the passport middleware below:
app.post(
  "/login", passport.authenticate('local', { failureRedirect: '/login'}),
  (req, res) => {
    res.redirect("profile");
  }
);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
/// Update Records
//Using a custom helper function we created in users.js, we can retrieve user data upon registration and update the records array:

function createUser(user) {
  return new Promise((resolve, reject) => {
    const newUser = {
      // getNewId creates an updated ID 
      // for the new user
      id: getNewId(records),
      ...user,
    };
    records = [newUser, ...records];
    resolve(newUser);
  });
};

// Logout
app.post('/logout', function(req, res, next){
  req.logout(function(err) {
    if (err) { return next(err); }
    res.redirect('/');
  });
});

//The following code is attempting to log out a user using passport-local.
app.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/login");
});