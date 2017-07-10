'use strict';

var url = require('url');


var Developers = require('./DevelopersService');


module.exports.getAlbums = function getAlbums (req, res, next) {
  Developers.getAlbums(req.swagger.params, res, next);
};

module.exports.getUser = function getUser (req, res, next) {
  Developers.getUser(req.swagger.params, res, next);
};
