/**
 * Created by roman on 11.03.2015.
 */
"use strict"
var $ = require('jquery');
var _ = require("underscore");
var Backbone = require("backbone");
Backbone.$ = $;


var TestItemView = require('./Test.ItemView.js');


var TestView = Backbone.View.extend({
    el: '#content',
    render: function () {
        var self = this;
        this.collection.each(function (model) {
            var modelView = new TestItemView({model: model});
            self.$el.append(modelView.render().$el);
        });


        return this;
    }
});

module.exports = TestView;