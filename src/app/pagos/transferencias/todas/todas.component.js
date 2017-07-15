(function() {
    'use strict';

var pagosTransferenciasTodas = {
  templateUrl: 'app/pagos/transferencias/todas/todas.html'
}

angular
  .module('transferencias')
  .component('pagosTransferenciasTodas', pagosTransferenciasTodas)
  .config(config);

function config($stateProvider) {
  $stateProvider
    .state('pagos.transferencias.todas', {
      parent: 'pagos.transferencias',
      url: '/todas',
      views: {
        'transferencias-content@pagos.transferencias': {
            component: 'pagosTransferenciasTodas'
        }
      }
    });
}

})();
