var path = require('path'),
    util = require('util'),
    scriptBase = require('../script-base');

module.exports = Generator;

function Generator() {
  scriptBase.apply(this, arguments);
  
  var dirPath = '../templates';
  
  this.sourceRoot(path.join(__dirname, dirPath));
}

util.inherits(Generator, scriptBase);

Generator.prototype.createControllerFiles = function() {
  var ext = '.js',
      destFile = path.join('app/scripts/collections', this.name + 's' + ext);
  
  this.template('collection' + ext, destFile);
};
