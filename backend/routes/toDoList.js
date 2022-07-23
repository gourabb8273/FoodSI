const express = require("express");
const route = express.Router();

const dummyData = require("../dummyData.json");

route.get("/", (req, res, next) => {
  res.status(200).json({ dummyData });
});

route.post("/", (req, res, next) => {
  res.status(200).json({ list: req.body });
});

module.exports = route;
