'use strict';

exports.deleteUserById = function(args, res, next) {
  /**
   * parameters expected in the args:
  * userId (Long)
  * api_key (String)
  **/
  // no response value expected for this operation
  res.end();
}

exports.getAlbums = function(args, res, next) {
  /**
   * parameters expected in the args:
  * albumId (Integer)
  **/
    var examples = {};
  examples['application/json'] = [ {
  "albumOwner" : {
    "website" : "http://aeekay.com",
    "phone" : "408-841-3813",
    "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851",
    "email" : "darkknight@gmail.com",
    "username" : "darkknight"
  },
  "name" : "Widget Adapter",
  "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851",
  "creationDate" : "2016-08-29T09:12:33.001Z"
} ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.getQuotes = function(args, res, next) {
  /**
   * parameters expected in the args:
  **/
    var examples = {};
  examples['application/json'] = [ {
  "quote" : "Look into the abyss",
  "created" : "2016-08-29T09:12:33.001Z",
  "id" : 324
} ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.getUser = function(args, res, next) {
  /**
   * parameters expected in the args:
  * userId (Integer)
  * username (String)
  **/
    var examples = {};
  examples['application/json'] = [ {
  "website" : "http://aeekay.com",
  "phone" : "408-841-3813",
  "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851",
  "email" : "darkknight@gmail.com",
  "username" : "darkknight"
} ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.getUserById = function(args, res, next) {
  /**
   * parameters expected in the args:
  * userId (Integer)
  **/
    var examples = {};
  examples['application/json'] = [ {
  "website" : "http://aeekay.com",
  "phone" : "408-841-3813",
  "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851",
  "email" : "darkknight@gmail.com",
  "username" : "darkknight"
} ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.quotesRandomGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  **/
    var examples = {};
  examples['application/json'] = [ {
  "quote" : "Look into the abyss",
  "created" : "2016-08-29T09:12:33.001Z",
  "id" : 324
} ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

