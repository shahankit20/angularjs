(function () {
  'use strict';

  angular.module('MsgApp', [])

  .controller('MsgController', MsgController);

  MsgController.$inject = ['$scope'];
  function MsgController ($scope) {
    $scope.name = "Ankit";
    $scope.stateOfBeing = "two";

    $scope.sayMessage = function () {
      return "Ankit likes to play football!";
    };

    $scope.showImage = function () {
      $scope.stateOfBeing = "one";
    };
  }

})();
