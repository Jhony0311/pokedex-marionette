define([
    'marionette',
    'handlebars',
    'views/itemList',
    'text!templates/listSectionTemplate.hbs',
], function (Marionette, Handlebars, ChildView, template) {
    'use strict';
    
    var view = Marionette.CompositeView.extend({
        className: 'row',
        template: Handlebars.compile(template),
        childView: ChildView,
        childViewContainer: 'ul',
        ui: {
            'pokemon': '.element',
            'search': 'input',
        },
        events: {
            'keypress @ui.search': 'filterSearch'
        },
        filterSearch: function(e) {
            if(e.currentTarget.value.lenght >= 3) {
                console.log('filtering');
            }
        }
    });
    
    return view;
});