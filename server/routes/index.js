/**
 * Module to handle application routing. Serves appropriate html file
 * for the given path
 */

const path = require('path');
const express = require('express');

var app = require('../app');
var router = express.Router();

/**
 * Serve homepage index.html
 */
router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../../client/views/index.html'));
});

module.exports = router;
