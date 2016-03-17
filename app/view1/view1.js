(function () {
    'use strict';

    angular.module('myApp.view1', [])
    .config(route);

    function route($routeProvider) {
      $routeProvider.when('/view1', {
        templateUrl: 'view1/view1.html',
        controller: View1Ctrl,
        controllerAs: '$ctrl'
      });
    }

    function View1Ctrl() {
        this.data = 'Hello world';
    }
})();