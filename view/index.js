var path = require('path'),
    util = require('util'),
    scriptBase = require('../script-base'),
    utils = require('../utils');

module.exports = Generator;

function Generator() {
  scriptBase.apply(this, arguments);
  
  var dirPath = '../templates';
  
  this.sourceRoot(path.join(__dirname, dirPath));

  this.utils = utils;

  this.hookFor('gs:template');
}

util.inherits(Generator, scriptBase);

Generator.prototype.createControllerFiles = function() {
  var ext = '.js',
      destFile = path.join('app/scripts/views', this.name + ext);

  this.template('view' + ext, destFile);
};
