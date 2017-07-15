(function() {
    'use strict';

var pagosTransferenciaNueva = {
  templateUrl: 'app/pagos/transferencias/nueva/nueva.html'
}

angular
  .module('transferencias')
  .component('pagosTransferenciaNueva', pagosTransferenciaNueva)
  .config(config);

function config($stateProvider) {
  $stateProvider
    .state('pagos.transferencias.nueva', {
      parent: 'pagos.transferencias',
      url: '/nueva',
      views: {
        'transferencias-content@pagos.transferencias': {
            component: 'pagosTransferenciaNueva'
        }
      }
    });
}

})();
