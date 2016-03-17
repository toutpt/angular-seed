(function () {
    'use strict';

    angular.module('myApp.view2', [])
    .config(route);

    /*@ngInject*/
    function route($routeProvider) {
      $routeProvider.when('/view2', {
        templateUrl: 'view2/view2.html',
        controller: View2Ctrl,
        controllerAs: '$ctrl'
      });
    }

    /*@ngInject*/
    function View2Ctrl() {
        this.data = 'Hello world';
    }

})();