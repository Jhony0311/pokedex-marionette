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
            'keyup @ui.search': 'filterSearch'
        },
        collectionEvents: {
            'filter': 'refresh'
        },
        filterSearch: function(e) {
            // console.log(e.currentTarget.value.lenght);
            if(e.currentTarget.value.length >= 3) {
                // console.log('filtering');
                var filtered = this.collection.filter(function(model) {
                    var reg = new RegExp(e.currentTarget.value, 'i');
                    var name = model.get('name');
                    if (reg.test(name)) {
                        model.set('filter', false);
                        return true;
                    } else {
                        model.set('filter', true);
                        return false;
                    }
                });
            } else {
                this.collection.each(function(model) {
                    model.set('filter', false);
                });
            }
        },
        refresh: function() {
            console.log('refresh');
        }
    });
    
    return view;
});