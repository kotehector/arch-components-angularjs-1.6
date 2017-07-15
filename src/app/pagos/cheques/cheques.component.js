(function() {
    'use strict';

var pagosCheques = {
  templateUrl: 'app/pagos/cheques/cheques.html',
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
  .component('pagosCheques', pagosCheques)
  .config(config);

function config($stateProvider) {
  $stateProvider
    .state('pagos.cheques', {
      parent: 'pagos',
      url: '/cheques', // borrar toda la url del padre
      views: {
        'pagos-content@pagos': {
            component: 'pagosCheques'
        }
      }
    });
}

})();
