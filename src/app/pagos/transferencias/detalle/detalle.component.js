(function() {
    'use strict';

var pagosTransferenciasDetalle = {
  bindings: {
    detalleTransferencia: '<',
    ordenesTransferencia: '<'
  },
  templateUrl: 'app/pagos/transferencias/detalle/detalle.html',
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
  .component('pagosTransferenciasDetalle', pagosTransferenciasDetalle)
  .config(config);

function config($stateProvider) {
  $stateProvider
    .state('pagos.transferencias.detalle', {
      parent: 'pagos.transferencias',
      params:  {
        id: null
      },
      url: '/detalle/:id/ordenes',
      views: {
        'transferencias-content@pagos.transferencias': {
            component: 'pagosTransferenciasDetalle'
        }
      },
      resolve: {
        detalleTransferencia: function($http, $transition$) {
          return $http.get('https://jsonplaceholder.typicode.com/posts/' + $transition$.params().id)
                      .then(function(response) {
                        console.log(response);
                        return response.data
                      })
        },
        ordenesTransferencia: function($http, $transition$) {
          return $http.get('https://jsonplaceholder.typicode.com/posts/' + $transition$.params().id + '/comments')
                      .then(function(response) {
                        console.log(response);
                        return response.data
                      })
        }
      }
    });
}

})();
