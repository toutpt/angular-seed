import angular from 'angular';
import * as ngRoute from 'angular-route';
import * as view1 from './view1/view1';
import * as view2 from './view2/view2';
import * as components from './components/version/version';


(function () {
    'use strict';

    // Declare app level module which depends on views, and components
    angular.module('myApp', [
      'ngRoute',
      'myApp.view1',
      'myApp.view2',
      'myApp.version'
    ]).config(route);
    console.log('coucou');

    /*@ngInject*/
    function route($routeProvider) {
        $routeProvider.otherwise({redirectTo: '/view1'});
    }

})();