define([
  'models/base/model'
], function(Model) {
  'use strict';

  var <%= _.classify(name) %>Model = Model.extend({
  });

  return <%= _.classify(name) %>Model;
});