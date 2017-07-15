(function() {
    'use strict';

var pagosNominas = {
  templateUrl: 'app/pagos/nominas/nominas.html'
}

angular
  .module('pagos')
  .component('pagosNominas', pagosNominas)
  .config(config);

function config($stateProvider) {
  $stateProvider
    .state('pagos.nominas', {
      //parent: 'pagos',
      url: '/nominas',
      views: {
        'pagos-content@pagos': {
            component: 'pagosNominas'
        }
      }
    });
}

})();
