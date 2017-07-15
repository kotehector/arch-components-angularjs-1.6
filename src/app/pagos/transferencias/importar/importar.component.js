(function() {
    'use strict';

var pagosTransferenciasImportar = {
  templateUrl: 'app/pagos/transferencias/importar/importar.html',
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
  .component('pagosTransferenciasImportar', pagosTransferenciasImportar)
  .config(config);

function config($stateProvider) {
  $stateProvider
    .state('pagos.transferencias.importar', {
      parent: 'pagos.transferencias',
      url: '/importar',
      views: {
        'transferencias-content@pagos.transferencias': {
            component: 'pagosTransferenciasImportar'
        }
      }
    });
}

})();
