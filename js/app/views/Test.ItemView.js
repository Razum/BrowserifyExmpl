var $ = require('jquery');
var _ = underscore = require("underscore");
var Backbone = require("backbone");

var fs = require('fs');
var html = fs.readFileSync('js/app/views/index.html', 'utf8');

Backbone.$ = $;


var TestItemView = Backbone.View.extend({
    render: function () {
        this.$el.html(_.template(html)(this.model.toJSON()));
        return this;
    }
});

module.exports = TestItemView;