(function() {
  'use strict';

  angular.module('FormValidationApp', []);

  angular.module('FormValidationApp')
  .controller('RegistrationController', RegistrationController);

  function RegistrationController() {
    var reg = this;

    reg.submit = function() {
      reg.completed = true;
    };
  }
})();
