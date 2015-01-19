define([
    'marionette',
    'handlebars',
    'text!templates/ItemListTemplate.hbs',
    ], function (Marionette, Handlebars, template) {
        'use strict';
        
        var view = Marionette.ItemView.extend({
           tagName: 'li',
           className: 'element',
           template: Handlebars.compile(template),
           modelEvents: {
            'change:filter': 'onFilter',
        },
        events: {
            'click': 'navigateTo'
        },
        onFilter: function() {
            var that = this;
            this.$el.removeClass('hide');
            if (this.model.get('filter')){
                this.$el.addClass('animated fadeOutDown');
                this.$el.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                    that.$el.addClass('hide');
                });
            } else {
                this.$el.removeClass('animated fadeOutDown');
                this.$el.addClass('animated fadeInUp');
            }
        },
        navigateTo: function() {
            console.log('navigate to ' + this.model.get('id'));
        }
    });
        
        return view;
    });