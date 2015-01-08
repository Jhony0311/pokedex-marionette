require([
    'marionette'
], function (Marionette) {
    return Marionette.AppRouter.extend({
        appRoutes: {
            '': 'default'
        }
    });
});