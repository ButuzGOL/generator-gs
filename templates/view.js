define([
  'jquery',
  'underscore',
  'views/base/view',

  'text!templates/<%= name %>.html.ejs',
], function($, _, View, template) {
  'use strict';

  var <%= _.classify(name.replace('index', '')) %>View = View.extend({
    name: '<%= _.classify(name.replace('index', '')) %>',
    id: '<%= utils.slashToAnother(name.replace('/index', ''), '-') %>-view',
    initialize: function() {
      View.prototype.initialize.call(this, arguments);

      this.title = $.t('<%= utils.slashToAnother(name, '.') %>.title');

      this.template = _.template(template);
    }
  });

  return <%= _.classify(name.replace('index', '')) %>View;
});
