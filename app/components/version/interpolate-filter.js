(function () {
    'use strict';

    angular.module('myApp.version')
    .filter('interpolate', versionFilter);

    function versionFilter(version) {
      return function(text) {
        return String(text).replace(/\%VERSION\%/mg, version);
      };
    }

})();