define([
    'marionette',
    'text!templates/layoutTemplate.hbs'
], function (Marionette, template) {
    'use strict';

    return Marionette.LayoutView.extend({
        el: '.content',
        template: template,
        regions: {
            list: '#list',
            details: '#details'
        }
    });

});