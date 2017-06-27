(function() {
  'use strict';

  angular.module('ShoppingList')
  .controller('ShoppingListController', ShoppingListController);

  ShoppingListController.$inject = ['ShoppingListFactory'];
  function ShoppingListController(ShoppingListFactory) {
    var list = this;

    var shoppingList = ShoppingListFactory();

    list.items = shoppingList.getItems();
    var orgTitle = "Shopping List #1";
    list.title = orgTitle + " ( " + list.items.length + " items )";

    list.itemName = "";
    list.itemQuantity = "";

    list.addItem = function() {
      shoppingList.addItem(list.itemName, list.itemQuantity);
      list.title = orgTitle + " ( " + list.items.length + " items )";
    }

    list.removeItem = function(itemIndex) {
      this.lastRemoved = "Last item removed was: " + this.items[itemIndex].name;
      shoppingList.removeItem(itemIndex);
      orgTitle + " ( " + list.items.length + " items )";
    }
  }

})();
