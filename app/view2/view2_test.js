'use strict';

ngDescribe('myApp.module module', {
    modules: ['myApp.module'],
    name: 'view2 controller',
    controllers: ['ViewCtrl'],
    tests: function (deps) {

        it('should ....', function() {
            //spec body
            expect(deps.ViewCtrl).toBeDefined();
        });
    }

});