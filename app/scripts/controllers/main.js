'use strict';

/**
 * @ngdoc function
 * @name deckPlaygroundApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the deckPlaygroundApp
 */
angular.module('deckPlaygroundApp')
  .controller('MainCtrl', function($scope) {

    $scope.exportCards = function() {
      $scope.cards = $scope.deckList.split("\n").map(function(cardLine) {
        var quantity = cardLine.match(/\d+/)[0];
        var name = cardLine.match(/\W.*/)[0].trim();
        return {
          name: name,
          quantity: parseInt(quantity)
        }
      })
    }

  });
