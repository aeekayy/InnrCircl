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

module.exports.getUser_1 = function getUser_1 (req, res, next) {
  Users.getUser_1(req.swagger.params, res, next);
};

module.exports.getUser_2 = function getUser_2 (req, res, next) {
  Users.getUser_2(req.swagger.params, res, next);
};

module.exports.quotesRandomGET = function quotesRandomGET (req, res, next) {
  Users.quotesRandomGET(req.swagger.params, res, next);
};
