(function() {
  'use strict';

  angular.module('ShoppingListDirectiveCtrlApp', [])
  .controller('ShoppingListController', ShoppingListController)
  .factory('ShoppingListFactory', ShoppingListFactory)
  .directive('shoppingList', ShoppingList);

  function ShoppingList() {
    var ddo = {
      templateUrl: 'shoppingList5.html',
      scope: {
        items: '<',
        myTitle: '@title',
        onRemove: '&'
      },
      controller: ShoppingListDirectiveController,
      controllerAs: 'list',
      bindToController: true,
      link: ShoppingListDirectiveLink,
      transclude: true
    };

    return ddo;
  }

  function ShoppingListDirectiveLink(scope, element, attrs, controller) {
    console.log("Link scope is: ", scope);
    console.log("Controller instance is: ", controller);
    console.log("Link elements is: ", element);

    scope.$watch('list.cookiesInList()', function(newValue, oldValue){
      console.log("Old value: ", oldValue);
      console.log("New value: ", newValue);

      if(newValue === true) {
        displayCookieWarning();
      }
      else {
        removeCookieWarning();
      }
    });

    function displayCookieWarning() {
      var warningElem = element.find("div");
      warningElem.css('display', 'block');

      // var warningElem = element.find("div.error");
      // warningElem.slideDown(900);
    }

    function removeCookieWarning() {
      var warningElem = element.find("div");
      warningElem.css('display', 'none');

      // var warningElem = element.find("div.error");
      // warningElem.slideUp(900);
    }
  }

  function ShoppingListDirectiveController() {
    var list = this;

    list.cookiesInList = function () {
      for(var i = 0; i < list.items.length; i++) {
        var name = list.items[i].name;
        if (name.toLowerCase().indexOf("cookie") !== -1) {
          return true;
        }
      }
      return false;
    };
  }

  ShoppingListController.$inject = ['ShoppingListFactory'];
  function ShoppingListController(ShoppingListFactory) {
    var list = this;

    var shoppingList = ShoppingListFactory();

    list.items = shoppingList.getItems();

    var origTitle = "Shopping List #1";
    list.title = origTitle + " (" + list.items.length + " items)"

    list.warning = "Cookie detected!!";

    list.itemName = "";
    list.itemQuantity = "";

    list.addItem = function() {
      shoppingList.addItem(list.itemName, list.itemQuantity);
      list.title = origTitle + " (" + list.items.length + " items)"
    }

    list.removeItem = function(itemIndex) {
      console.log("'this' is: ", this);
      this.lastRemoved = "Last item removed was " + this.items[itemIndex].name;
      shoppingList.removeItem(itemIndex);
      list.title = origTitle + " (" + list.items.length + " items)"
    };
  }

  function ShoppingListService(maxItems) {
    var service = this;

    //list of shopping items
    var items = [];

    service.addItem = function(itemName, quantity) {
      if ((maxItems === undefined) || (maxItems !== undefined) && (items.length < maxItems)) {
        var item = {
          name: itemName,
          quantity: quantity
        };
        items.push(item);
      }
      else {
        throw new Error("Max items ( " + maxItems + " ) reached.")
      }
    };

    service.removeItem = function (itemIndex) {
      items.splice(itemIndex, 1);
    };

    service.getItems = function () {
      return items;
    };
  }

  function ShoppingListFactory() {
    var factory = function(maxItems) {
      return new ShoppingListService(maxItems);
    };

    return factory;
  }

})();
