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
      var unflattenedCards = $scope.deckList.split("\n").map(function(cardLine) {
        var quantity = cardLine.match(/\d+/)[0];
        var name = cardLine.match(/\W.*/)[0].trim();

        var cardToAdd = [];
        for (var i = 0; i < quantity; i++) {
          cardToAdd.push({ name: name })
        }
        return cardToAdd;
      });
      $scope.cards = [].concat.apply([], unflattenedCards); // unflattenedCards.flatten C'MON YAVASCRIPT
    }

  });
