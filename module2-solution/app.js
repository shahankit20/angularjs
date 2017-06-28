(function () {
  'use strict';

  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController (ShoppingListCheckOffService) {
    var toBuy = this;

    toBuy.items = ShoppingListCheckOffService.getItemsToBuy();
    toBuy.empty = function () {
      return toBuy.items.length === 0;
    };
    toBuy.checkOffItem = function(index) {
      ShoppingListCheckOffService.checkOff(index);
    };
  }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController (ShoppingListCheckOffService) {
    var bought = this;

    bought.items = ShoppingListCheckOffService.getItemsBought();
    bought.empty = function () {
      return bought.items.length === 0;
    };
  }

  function ShoppingListCheckOffService () {
    var service = this;

    var toBuy = [
      { name: "Ice cream", quantity: 3 },
      { name: "Chocolate", quantity: 5 },
      { name: "Tomatoes", quantity: 10 },
      { name: "Corn", quantity: 1 },
      { name: "Apple", quantity: 4 },
      { name: "Bananas", quantity: 6 },
      { name: "Bread", quantity: 2 },
      { name: "Milk", quantity: 1 },
      { name: "Eggs", quantity: 6 },
      { name: "Mustard", quantity: 1 }
    ];
    var bought = [];

    service.getItemsToBuy = function () {
      return toBuy;
    };

    service.getItemsBought = function () {
      return bought;
    };

    service.checkOff = function (itemIndex) {
      bought.push(toBuy[itemIndex]);
      toBuy.splice(itemIndex, 1);
    };
  }
})();
