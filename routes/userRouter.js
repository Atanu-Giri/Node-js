//Core Module
const path = require('path');

//External Module
const express = require('express');
const userRouter = express.Router();

const rootDir = require('../utils/pathUtil');
const { registratedHouses } = require('./hostRouter');

userRouter.get("/", (req, res, next) => {
  res.render('home', {registratedHouses: registratedHouses, pageTitle: "Hello"});
});

module.exports = userRouter;