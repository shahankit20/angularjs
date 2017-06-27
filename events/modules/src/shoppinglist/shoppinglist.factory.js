(function() {
  'use strict';

  angular.module('ShoppingList')
  .factory('ShoppingListFactory', ShoppingListFactory);

  function ShoppingListFactory() {
    var factory = function(maxItems) {
      return new ShoppingListService(maxItems);
    };

    return factory;
  }

  function ShoppingListService(maxItems) {
    var service = this;
    var items = [];

    service.addItem = function(name, quantity) {
      if((maxItems === undefined) || (maxItems !== undefined) && (items.length < maxItems)) {
        var item = {
          name: name,
          quantity: quantity
        };
        items.push(item);
      }
      else {
        throw new Error("Max items ( " + maxItems + " ) reached!");
      }
    };

    service.removeItem = function(itemIndex) {
      return items.splice(itemIndex, 1);
    };

    service.getItems = function() {
      return items;
    };
  }

})();
