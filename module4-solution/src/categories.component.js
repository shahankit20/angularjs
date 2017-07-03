(function () {
  'use strict';

  angular.module('MenuApp')
  .component('categories', {
    templateUrl: 'src/templates/categorycomponent.template.html',
    bindings: {
      items: '<'
    }
  });
})();
