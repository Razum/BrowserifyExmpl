/**
 * Created by roman on 11.03.2015.
 */
var _ = underscore = require("underscore");
var Backbone = require("backbone");
var TestModel = require("../models/Test.Model")


var TestCollection = Backbone.Collection.extend({
    model: TestModel
});

module.exports = TestCollection;