(function () {
  'use strict';

  angular.module('MsgApp', [])

  .controller('MsgController', MsgController)
  .filter('loves', LovesFilter)
  .filter('truth', TruthFilter);

  MsgController.$inject = ['$scope', '$filter', 'lovesFilter'];
  function MsgController ($scope, $filter, lovesFilter) {
    $scope.name = "Ankit";
    $scope.stateOfBeing = "two";
    $scope.imageCost = .45;

    $scope.sayMessage = function () {
      var msg = "Ankit likes to play football!";
      var output = $filter('uppercase')(msg);
      return output;
    };

    $scope.sayLovesMessage = function () {
      var msg = "Ankit likes to play football!";
      msg = lovesFilter(msg);
      return msg;
    };

    $scope.showImage = function () {
      $scope.stateOfBeing = "one";
    };
  }

  function LovesFilter () {
    return function(input) {
      input = input || "";
      input = input.replace("likes", "loves");
      return input;
    };
  }

  function TruthFilter () {
    return function(input, target, replace) {
      input = input || "";
      input = input.replace(target, replace);
      return input;
    }
  }

})();
