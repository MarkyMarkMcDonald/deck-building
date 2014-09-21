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
      $scope.deckLines = $scope.deckList.split("\n").map(function(cardLine) {
        var quantity = cardLine.match(/\d+/)[0];
        var name = cardLine.match(/\W.*/)[0].trim();

        return {
          quantity: quantity,
          name: name
        };
      });

      var cards = [];
      $scope.deckLines.forEach(function(deckLine) {
        for (var i = 0; i < deckLine.quantity; i++) {
          cards.push({ name: deckLine.name })
        }
      });
      $scope.cards = cards;
    }

  });
