'use strict';
var util = require('util'),
    path = require('path'),
    yeoman = require('yeoman-generator');


var GsGenerator = module.exports = function(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);

  this.on('end', function () {
    this.installDependencies({ skipInstall: options['skip-install'] });
  });

  this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(GsGenerator, yeoman.generators.Base);

GsGenerator.prototype.askFor = function() {
  var cb = this.async();

  // have Yeoman greet the user.
  console.log(this.yeoman);

  var prompts = [];

  this.prompt(prompts, function (props) {
    this.someOption = props.someOption;

    cb();
  }.bind(this));
};

GsGenerator.prototype.app = function() {
  this.mkdir('app');
  this.mkdir('app/scripts');

  this.copy('_package.json', 'package.json');
  this.copy('_bower.json', 'bower.json');
};

GsGenerator.prototype.projectfiles = function() {
  this.copy('editorconfig', '.editorconfig');
  this.copy('jshintrc', '.jshintrc');
};
