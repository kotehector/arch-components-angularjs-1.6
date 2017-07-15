(function() {
    'use strict';

var pagosConfirming = {
  templateUrl: 'app/pagos/confirming/confirming.html',
  controller: function($state) {
    var ctrl = this;

    ctrl.$onInit = function() {};

    ctrl.$postLink = function() {
      ctrl.uiState = $state.current;
        console.log(ctrl.uiState);
    };
  }
}

angular
  .module('pagos')
  .component('pagosConfirming', pagosConfirming)
  .config(config);

function config($stateProvider) {
  $stateProvider
    .state('pagos.confirming', {
      //parent: 'pagos',
      url: '/confirming',
      views: {
        'pagos-content@pagos': {
            component: 'pagosConfirming'
        }
      }
    });
}

})();
