define([
  'collections/base/collection',
  'models/<%= name %>'
], function(Collection, <%= _.classify(name) %>Model) {
  'use strict';

  var <%= _.classify(name) %>Collection = Collection.extend({
    model: <%= _.classify(name) %>Model
  });

  return <%= _.classify(name) %>Collection;
});