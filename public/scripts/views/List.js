define([
    'marionette',
    'views/itemList',
    'text!templates/listSectionTemplate.hbs',
], function (Marionette, ChildView, template) {
    'use strict';
    
    var view = Marionette.CollectionView.extend({
        template: template,
        childView: ChildView,
        onBeforeShow: function(){
            console.log('before show list');
        }
    });
    
    return view;
});