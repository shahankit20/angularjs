(function() {
  'use strict';

  angular.module('ShoppingList')
  .service('WeightLossFilterService', WeightLossFilterService);

  WeightLossFilterService.$inject = ['$q', '$timeout'];
  function WeightLossFilterService($q, $timeout) {
    var service = this;

    service.checkName = function(name) {
      var deferred = $q.defer();
      var result = {
        message: ""
      };

      $timeout(function() {
        if (name.toLowerCase().indexOf('cookie') === -1) {
          deferred.resolve(result);
        }
        else {
          result.message = "Cookies are not good!";
          deferred.reject(result);
        }
      }, 3000);

      return deferred.promise;
    };

    service.checkQuantity = function(quantity) {
      var deferred = $q.defer();
      var result = {
        message: ""
      };

      $timeout(function() {
        if (quantity < 6) {
          deferred.resolve(result);
        }
        else {
          result.message = "Too many!";
          deferred.reject(result);
        }
      }, 1000);

      return deferred.promise;
    };
  }

})();
