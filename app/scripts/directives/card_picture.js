'use strict';

/**
 * @ngdoc directive
 * @name deckPlaygroundApp.directive:cardPicture
 * @description
 * # cardPicture
 */
angular.module('deckPlaygroundApp')
  .directive('cardPicture', function ($http) {
    return {
      templateUrl: 'views/main.html',
      link: function postLink(scope, element, attrs) {
        var cardSearchUrl = 'http://api.mtgdb.info/cards/' + encodeURIComponent(scope.card.name);

        $http.get(cardSearchUrl).success(function(data) {
          var firstCard = data[0];
          element.attr('src', 'http://api.mtgdb.info/content/card_images/' + firstCard.id + '.jpeg');
        });
      }
    };
  });
