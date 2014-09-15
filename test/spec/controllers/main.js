'use strict';

describe('Controller: MainCtrl', function() {

  // load the controller's module
  beforeEach(module('deckPlaygroundApp'));
  
  var scope, controller;
  
  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller, $rootScope) {
    scope = $rootScope.$new();
    controller = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  var expectedCards = [
    {
      name: 'Lightning Bolt',
      quantity: 4
    },
    {
      name: 'Mountain',
      quantity: 10
    },
    {
      name: 'Lightning Strike',
      quantity: 3
    },
    {
      name: 'Fireball',
      quantity: 4
    },
    {
      name: 'Lightning Axe',
      quantity: 3
    }
  ];

  describe('.exportCards', function() {
    it("should turn a decklist into an array of card objects", function() {
      scope.deckList = ['4x Lightning Bolt', '10 Mountain', '3x Lightning Strike', '4 Fireball', '3 Lightning Axe']
        .join('\n');
      scope.exportCards();
      expect(scope.cards).toEqual(expectedCards)
    });

  });
});
