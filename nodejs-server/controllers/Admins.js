'use strict';

var url = require('url');


var Admins = require('./AdminsService');


module.exports.deleteUserById = function deleteUserById (req, res, next) {
  Admins.deleteUserById(req.swagger.params, res, next);
};

module.exports.getAlbums = function getAlbums (req, res, next) {
  Admins.getAlbums(req.swagger.params, res, next);
};

module.exports.getQuotes = function getQuotes (req, res, next) {
  Admins.getQuotes(req.swagger.params, res, next);
};

module.exports.getUser = function getUser (req, res, next) {
  Admins.getUser(req.swagger.params, res, next);
};

module.exports.getUserById = function getUserById (req, res, next) {
  Admins.getUserById(req.swagger.params, res, next);
};

module.exports.quotesRandomGET = function quotesRandomGET (req, res, next) {
  Admins.quotesRandomGET(req.swagger.params, res, next);
};
