(function() {
    'use strict';

var pagosTransferencias = {
  templateUrl: 'app/pagos/transferencias/transferencias.html',
  controller: function($state) {
    var ctrl = this;
    ctrl.infoMenu = [];

    ctrl.$onInit = function() {
      ctrl.infoMenu = [{
          titulo: 'Nueva',
          estado: 'pagos.transferencias.nueva'
        },{
          titulo: 'Importar',
          estado: 'pagos.transferencias.importar'
        },{
          titulo: 'Eliminar',
          estado: 'pagos.transferencias.eliminar'
        },{
          titulo: 'Todas',
          estado: 'pagos.transferencias.todas'
        }];
    }

    ctrl.$postLink = function() {
      ctrl.uiState = $state.current;
        console.log(ctrl.uiState);
    }
  }
}

angular
  .module('transferencias')
  .component('pagosTransferencias', pagosTransferencias)
  .config(config);

function config($stateProvider) {
  $stateProvider
    .state('pagos.transferencias', {
      //parent: 'pagos',
      redirectTo: 'pagos.transferencias.todas',
      url: '/transferencias',
      views: {
        //parent-view
        'pagos-content@pagos': {
            component: 'pagosTransferencias'
        },
        '@': {
          component: 'pagosTransferencias'
        }
      }
    });
}

})();
