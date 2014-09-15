'use strict';

describe('Directive: cardPicture', function () {

  // load the directive's module
  beforeEach(module('deckPlaygroundApp'));

  beforeEach(module('testTemplates'));

  var element, $scope, $httpBackend;

  beforeEach(inject(function ($rootScope, _$httpBackend_) {
    var fixtures = window.__json__;
    var cardSearchResponse = fixtures['test/fixtures/json/lightning_bolt_search.json']; // vomit

    $scope = $rootScope.$new();
    $httpBackend = _$httpBackend_;
    $httpBackend.when('GET', 'http://api.mtgdb.info/cards/Lightning%20Bolt')
      .respond(cardSearchResponse)
  }));

  it('should display a card image based off a card name', inject(function ($compile) {
    $scope.card = {name: 'Lightning Bolt'};
    element = angular.element('<div card-picture></div>');
    element = $compile(element)($scope);
    $scope.$digest();

    $httpBackend.flush();
    expect(element.attr('src')).toBe('http://api.mtgdb.info/content/card_images/191089.jpeg');
  }));
});
