'use strict';

var url = require('url');


var Admins = require('./AdminsService');


module.exports.getAlbums = function getAlbums (req, res, next) {
  Admins.getAlbums(req.swagger.params, res, next);
};

module.exports.getQuotes = function getQuotes (req, res, next) {
  Admins.getQuotes(req.swagger.params, res, next);
};

module.exports.getUser = function getUser (req, res, next) {
  Admins.getUser(req.swagger.params, res, next);
};

module.exports.getUser_1 = function getUser_1 (req, res, next) {
  Admins.getUser_1(req.swagger.params, res, next);
};

module.exports.getUser_2 = function getUser_2 (req, res, next) {
  Admins.getUser_2(req.swagger.params, res, next);
};

module.exports.quotesRandomGET = function quotesRandomGET (req, res, next) {
  Admins.quotesRandomGET(req.swagger.params, res, next);
};
