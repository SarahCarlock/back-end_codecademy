/*We can accomplish this by using the bcrypt algorithm and library. Using bcrypt, we can protect our users by hashing and salting passwords. 
    Using multiple rounds of hashing ensures that an attacker must deploy massive funds and hardware to be able to crack your passwords.
bcrypt is hashing algorithm, it uses a salt and salt rounds to secure a password.
A hash function only works one-way, which means that once a value is hashed it can’t be unhashed. This is different from encryption, 
    because, if you know which algorithm was used to encrypt a value, you can use that same algorithm to decrypt it.
Rainbow Tables are complex and consist  of 2 different types of functions:
    A Hashing function: Used by the table must match the hashed password you want to recover.
    A Reduction function: Transforms a has into something usable as a password. However, it's important to understand that the reduction function doesn't reverse the has value, 
        so it doesn't output the original plain text (i.s.the password), because this isn't possib;e. but instead outputs a completely new one.
Salt- a value that is concatenated to a password before hasing in order to make it less vulnerable to rainbow table and brute- force attacks.
A Salt Round- can be described as the amount of time needed to calculate a singe bcrypt has. The higher the salt rounds, the more time is necessary to crack a password.
bcrypt.compare(password, hash) = takes in a plaintext password, password and a hashed password, hash.

In this lesson we covered:

What a hashing algorithm is and how it can be used to protect a plaintext password.

What a salt is and how it’s used to further secure a hashed password.

How Rainbow Table attacks are used to crack password hashes.

How to use bcrypt in order to generate a salt and hash a plaintext password.

How to use bcrypt in order to compare a retrieved password with a password stored in the database.

How to implement bcrypt in an actual application and use it via user requests to authenticate users.
*/


// example
const bcrypt = require("bcrypt");

// Create password hashing function below:
const passwordHash = async(password, saltRounds) => {
  try {
    const salt = await bcrypt.genSalt(saltRounds);
    const hash = await bcrypt.hash(password, salt);
    return hash;
  } catch (err) {
    console.log(err);
  }
  return null;
};

// example verifying passwords
const bcrypt = require("bcrypt");

// Create your password comparison function below:
const comparePasswords = async(password, hash) => {
  try {
    const matchFound = await bcrypt.compare(password, hash);
    return matchFound;
  }
  catch (err) {
    console.log(err);
  };
  return false;
};