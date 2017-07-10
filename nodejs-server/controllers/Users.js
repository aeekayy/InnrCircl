'use strict';

var url = require('url');


var Users = require('./UsersService');


module.exports.addAlbum = function addAlbum (req, res, next) {
  Users.addAlbum(req.swagger.params, res, next);
};

module.exports.getAlbums = function getAlbums (req, res, next) {
  Users.getAlbums(req.swagger.params, res, next);
};

module.exports.getUser = function getUser (req, res, next) {
  Users.getUser(req.swagger.params, res, next);
};

module.exports.getUserById = function getUserById (req, res, next) {
  Users.getUserById(req.swagger.params, res, next);
};

module.exports.quotesRandomGET = function quotesRandomGET (req, res, next) {
  Users.quotesRandomGET(req.swagger.params, res, next);
};
