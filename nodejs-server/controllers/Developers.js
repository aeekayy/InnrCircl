'use strict';

var url = require('url');


var Developers = require('./DevelopersService');


module.exports.deleteUserById = function deleteUserById (req, res, next) {
  Developers.deleteUserById(req.swagger.params, res, next);
};

module.exports.getAlbums = function getAlbums (req, res, next) {
  Developers.getAlbums(req.swagger.params, res, next);
};

module.exports.getQuotes = function getQuotes (req, res, next) {
  Developers.getQuotes(req.swagger.params, res, next);
};

module.exports.getUser = function getUser (req, res, next) {
  Developers.getUser(req.swagger.params, res, next);
};

module.exports.getUserById = function getUserById (req, res, next) {
  Developers.getUserById(req.swagger.params, res, next);
};

module.exports.quotesRandomGET = function quotesRandomGET (req, res, next) {
  Developers.quotesRandomGET(req.swagger.params, res, next);
};
