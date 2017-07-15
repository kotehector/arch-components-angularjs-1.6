(function() {
    'use strict';

var pagosTransferenciasEliminar = {
  templateUrl: 'app/pagos/transferencias/eliminar/eliminar.html',
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
  .component('pagosTransferenciasEliminar', pagosTransferenciasEliminar)
  .config(config);

function config($stateProvider) {
  $stateProvider
    .state('pagos.transferencias.eliminar', {
      parent: 'pagos.transferencias',
      url: '/eliminar',
      views: {
        'transferencias-content@pagos.transferencias': {
            component: 'pagosTransferenciasEliminar'
        }
      }
    });
}

})();
