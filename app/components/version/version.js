(function() {
    'use strict';

    angular.module('myApp.version', [])
        .value('version', '0.1')
        .component('appVersion', {
            controller: appVersion
        });

    function appVersion(version, $element) {
        $element.text(version);
    }


})();