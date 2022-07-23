const express = require("express");
const route = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config();

route.post("/", (req, res, next) => {
  const userId = req.body.userId;
  const password = req.body.password;
  const secretKey = process.env.SECRET_KEY;
  const saltRounds = 10;

  // Hashing password
  bcrypt.genSalt(saltRounds, function (err, salt) {
    bcrypt.hash(password, salt, function (err, hash) {
      const token = jwt.sign(
        {
          userId,
          password: hash,
        },
        secretKey
      );
      res.cookie("authcookiejwt", token, {
        expires: new Date(Date.now() + 10000),
        httpOnly: true,
      });
      res.status(200).json({ userToken: token, auth: true });
    });
  });
});

module.exports = route;
