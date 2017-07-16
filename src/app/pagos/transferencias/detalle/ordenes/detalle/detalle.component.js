(function() {
    'use strict';

var pagosTransferenciasDetalleOrdenesDetalle = {
  bindings: {
    detalleOrdenes: '<',
  },
  templateUrl: 'app/pagos/transferencias/detalle/ordenes/detalle/detalle.html',
  controller: function($state, DTColumnBuilder) {
    var ctrl = this;

    ctrl.$onInit = function() {
      console.log(ctrl.detalleOrdenes)
    };

    ctrl.$postLink = function() {
      ctrl.uiState = $state.current;
        console.log(ctrl.uiState);
    }
  }
}

angular
  .module('transferencias')
  .component('pagosTransferenciasDetalleOrdenesDetalle', pagosTransferenciasDetalleOrdenesDetalle)
  .config(config);

function config($stateProvider) {
  $stateProvider
    .state('pagos.transferencias.detalle.ordenes.detalle', {
      parent: 'pagos.transferencias.detalle.ordenes',
      url: ':postId/detalle/:id',
      views: {
        'ordenes-content@pagos.transferencias.detalle.ordenes': {
            component: 'pagosTransferenciasDetalleOrdenesDetalle'
        }
      },
      resolve: {
        detalleOrdenes: function($http, $transition$) {
          console.log('params: ', $transition$.params());
          return $http.get('https://jsonplaceholder.typicode.com/posts/' + $transition$.params().postId + '/comments/' + $transition$.params().id)
                      .then(function(response) {
                        console.log(response);
                        return response.data
                      })
        }
      }
    });
}

})();
