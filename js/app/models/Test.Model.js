/**
 * Created by roman on 11.03.2015.
 */
var _ = underscore = require("underscore");
var Backbone = require("backbone");
var TestModel = Backbone.Model.extend({
    defaults: {
        'name': 'Default Name'
    }
});

module.exports = TestModel;