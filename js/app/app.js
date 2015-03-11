var _ = underscore = require("underscore");
var Backbone = require("backbone");
Backbone.$ = require('jquery');

var TestCollection = require('./collections/Test.Collection');
var TestView = require('./views/Test.View');

var testcollection = new TestCollection([{name: 'Alex'}, {name: 'Pete'}, {name: 'Kev'}]);
var view = new TestView({collection: testcollection});


view.render();