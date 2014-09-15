'use strict';

/**
 * @ngdoc overview
 * @name deckPlaygroundApp
 * @description
 * # deckPlaygroundApp
 *
 * Main module of the application.
 */
angular
  .module('deckPlaygroundApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
