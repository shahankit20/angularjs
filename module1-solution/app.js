(function () {
  'use strict';

  angular.module('LunchCheck', [])

  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope) {
    $scope.getList = function() {
      var comma = ',';
      var itemList = $scope.list;
      var listCount;
      listCount = splitString(itemList, comma);

      if (listCount == 0) {
        $scope.message = "Please enter data first";
      }
      else if (listCount <= 3) {
        $scope.message = "Enjoy!";
      }
      else {
        $scope.message = "Too much!";
      }
    };

    function splitString (stringToSplit, separator) {
      var arrayLength;
      if (stringToSplit == undefined || stringToSplit == null || stringToSplit == "") {
        arrayLength = 0;
      }
      else {
        var arrayOfStrings = stringToSplit.split(separator);
        arrayLength = arrayOfStrings.length;
      }
      return arrayLength;
    }
  }
})();
