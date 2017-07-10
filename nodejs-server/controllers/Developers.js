'use strict';

var url = require('url');


var Developers = require('./DevelopersService');


module.exports.getAlbums = function getAlbums (req, res, next) {
  Developers.getAlbums(req.swagger.params, res, next);
};

module.exports.getQuotes = function getQuotes (req, res, next) {
  Developers.getQuotes(req.swagger.params, res, next);
};

module.exports.getUser = function getUser (req, res, next) {
  Developers.getUser(req.swagger.params, res, next);
};

module.exports.getUser_1 = function getUser_1 (req, res, next) {
  Developers.getUser_1(req.swagger.params, res, next);
};

module.exports.getUser_2 = function getUser_2 (req, res, next) {
  Developers.getUser_2(req.swagger.params, res, next);
};

module.exports.quotesRandomGET = function quotesRandomGET (req, res, next) {
  Developers.quotesRandomGET(req.swagger.params, res, next);
};
