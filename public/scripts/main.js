/*global require*/
'use strict';

require.config({
	baseUrl: 'scripts/',
	paths: {
		jquery: 'libs/jquery.min',
		backbone: 'libs/backbone.min',
		underscore: 'libs/underscore.min',
		marionette: 'libs/marionette',
		babysitter: 'libs/backbone.babysitter',
		wreqr: 'libs/backbone.wreqr',
		handlebars: 'libs/handlebars',
	},
	shim: {
		marionette: {
			deps: ['babysitter', 'wreqr', 'backbone']
		}
	}
});

require([
	'jquery',
	'underscore',
	'backbone',
	'app',
	'models/UserModel'
], function ($, _, Backbone, AppRouter, UserModel) {
	
});
