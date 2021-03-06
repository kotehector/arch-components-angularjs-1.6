(function() {
    'use strict';

var pagosTransferenciasDetalle = {
  bindings: {
    detalleTransferencia: '<',
    ordenesTransferencia: '<'
  },
  templateUrl: 'app/pagos/transferencias/detalle/detalle.html',
  controller: function($state, DTColumnBuilder) {
    var ctrl = this;

    ctrl.$onInit = function() {
      ctrl.url = 'https://jsonplaceholder.typicode.com/posts/' + ctrl.ordenesTransferencia.id + '/comments';
      console.log(ctrl.ordenesTransferencia);
      ctrl.columnsDT = [
        DTColumnBuilder.newColumn('postId').withTitle('ID'),
        DTColumnBuilder.newColumn('name').withTitle('Nombre'),
        DTColumnBuilder.newColumn('email').withTitle('Email'),
        DTColumnBuilder.newColumn('body').withTitle('Body')
      ];
    };

    ctrl.$postLink = function() {
      ctrl.uiState = $state.current;
        console.log(ctrl.uiState);
    }

    ctrl.goTo = function(event) {
      $state.go('pagos.transferencias.detalle.detalleOrden', {
          id: event.id
      });
      console.log("evento: ", event);
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
      redirectTo: 'pagos.transferencias.detalle.ordenes',
      url: '/detalle/:id',
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
          var params = $transition$.params();
          return params;
        }

      }
    });
}

})();
