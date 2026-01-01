const path = require('path')
const express = require('express');
const hostRouter = express.Router();
const rootDir = require('../utils/pathUtil');

hostRouter.get('/add-home', (req, res, next) => {
  res.render('addHome', {pageTitle: 'Add Your Home on airbnb'});
  
});

const registratedHouses = [];

hostRouter.post("/add-home", (req, res, next) => {
  console.log(`Home registration:`, req.body);
  registratedHouses.push({houseName: req.body.houseName});
  res.render('homeAdded', {pageTitle: 'Home Added Successfully'});
  
});

exports.hostRouter = hostRouter;
exports.registratedHouses = registratedHouses;