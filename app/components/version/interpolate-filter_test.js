'use strict';

ngDescribe('myApp.version module', {
    modules: ['myApp.version'],
    name: 'interpolate filter',
    inject: ['interpolateFilter'],
    tests: function(deps) {
        beforeEach(module(function($provide) {
            $provide.value('version', 'TEST_VER');
        }));

        it('should replace VERSION', inject(function() {
            expect(deps.interpolateFilter('before %VERSION% after')).toEqual('before TEST_VER after');
        }));
    }
});