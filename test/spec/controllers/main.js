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
      name: 'Lightning Bolt'
    },{
      name: 'Lightning Bolt'
    },{
      name: 'Lightning Bolt'
    },{
      name: 'Lightning Bolt'
    },
    {
      name: 'Mountain'
    },
    {
      name: 'Mountain'
    },
    {
      name: 'Mountain'
    },
    {
      name: 'Mountain'
    },
    {
      name: 'Mountain'
    }
  ];

  describe('.exportCards', function() {
    it("should turn a decklist into an array of card objects", function() {
      scope.deckList = ['4x Lightning Bolt', '5 Mountain']
        .join('\n');
      scope.exportCards();
      expect(scope.cards).toEqual(expectedCards)
    });

  });
});
