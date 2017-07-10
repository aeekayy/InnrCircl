'use strict';

var url = require('url');


var Admins = require('./AdminsService');


module.exports.getAlbums = function getAlbums (req, res, next) {
  Admins.getAlbums(req.swagger.params, res, next);
};

module.exports.getUser = function getUser (req, res, next) {
  Admins.getUser(req.swagger.params, res, next);
};
