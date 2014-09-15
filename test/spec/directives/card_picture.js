'use strict';

describe('Directive: cardPicture', function () {

  // load the directive's module
  beforeEach(module('deckPlaygroundApp'));

  beforeEach(module('testTemplates'));

  var element, $scope, $httpBackend;

  beforeEach(inject(function ($rootScope, _$httpBackend_) {
    $scope = $rootScope.$new();
    $httpBackend = _$httpBackend_;
    $httpBackend.when('GET', 'http://api.mtgdb.info/cards/Lightning%20Bolt')
      .respond(
        [
          {
            "id": 191089,
            "relatedCardId": 0,
            "setNumber": 146,
            "name": "Lightning Bolt",
            "searchName": "lightningbolt",
            "description": "Lightning Bolt deals 3 damage to target creature or player.",
            "flavor": " The sparkmage shrieked, calling on the rage of the storms of his youth. To his surprise, the sky responded with a fierce energy he'd never thought to see again.",
            "colors": ["red"],
            "manaCost": "R",
            "convertedManaCost": 1,
            "cardSetName": "Magic 2010",
            "type": "Instant",
            "subType": null,
            "power": 0,
            "toughness": 0,
            "loyalty": 0,
            "rarity": "Common",
            "artist": "Christopher Moeller",
            "cardSetId": "M10",
            "token": false,
            "promo": false,
            "rulings": [],
            "formats": [
              {
                "name": "Modern",
                "legality": "Legal"
              },
              {
                "name": "Legacy",
                "legality": "Legal"
              },
              {
                "name": "Vintage",
                "legality": "Legal"
              },
              {
                "name": "Freeform",
                "legality": "Legal"
              },
              {
                "name": "Prismatic",
                "legality": "Legal"
              },
              {
                "name": "Tribal Wars Legacy",
                "legality": "Legal"
              },
              {
                "name": "Classic",
                "legality": "Legal"
              },
              {
                "name": "Singleton 100",
                "legality": "Legal"
              },
              {
                "name": "Commander",
                "legality": "Legal"
              }
            ],
            "releasedAt": "2009-07-17"
          }
      ]
    )
  }));

  it('should display a card image based off a card name', inject(function ($compile) {
    $scope.card = {name: 'Lightning Bolt'};
    element = angular.element('<div card-picture></div>');
    element = $compile(element)($scope);
    $scope.$digest();

    $httpBackend.flush();
    expect($scope.pictureUrl).toBe('http://api.mtgdb.info/content/card_images/191089.jpeg');
  }));
});
