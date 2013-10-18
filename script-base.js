'use strict';
var path = require('path'),
    util = require('util'),
    yeoman = require('yeoman-generator'),
    utils = require('./utils.js');

var Generator = module.exports = function Generator() {
  yeoman.generators.NamedBase.apply(this, arguments);
};

util.inherits(Generator, yeoman.generators.NamedBase);