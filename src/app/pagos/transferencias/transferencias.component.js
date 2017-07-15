(function() {
    'use strict';

var pagosTransferencias = {
  templateUrl: 'app/pagos/transferencias/transferencias.html'
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
        },
        'transferencias-menu@pagos.transferencias': {
          component: 'transferenciasMenu'
        }
      }
    });
}

})();
