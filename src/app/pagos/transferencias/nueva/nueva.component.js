(function() {
    'use strict';

var pagosTransferenciasNueva = {
  templateUrl: 'app/pagos/transferencias/nueva/nueva.html',
  controller: function($state) {
    var ctrl = this;

    ctrl.$onInit = function() {};

    ctrl.$postLink = function() {
      ctrl.uiState = $state.current;
        console.log(ctrl.uiState);
    }
  }
}

angular
  .module('transferencias')
  .component('pagosTransferenciasNueva', pagosTransferenciasNueva)
  .config(config);

function config($stateProvider) {
  $stateProvider
    .state('pagos.transferencias.nueva', {
      parent: 'pagos.transferencias',
      url: '/nueva',
      views: {
        'transferencias-content@pagos.transferencias': {
            component: 'pagosTransferenciasNueva'
        }
      }
    });
}

})();
