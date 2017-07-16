(function() {
    'use strict';

var pagosTransferenciasDetalleOrdenes = {
  bindings: {
    ordenesTransferencia: '<'
  },
  templateUrl: 'app/pagos/transferencias/detalle/ordenes/ordenes.html',
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
      $state.go('pagos.transferencias.ordenes', {
          id: event.id
      });
      console.log("evento: ", event);
    }
  }
}

angular
  .module('transferencias')
  .component('pagosTransferenciasDetalleOrdenes', pagosTransferenciasDetalleOrdenes)
  .config(config);

function config($stateProvider) {
  $stateProvider
    .state('pagos.transferencias.detalle.ordenes', {
      parent: 'pagos.transferencias.detalle',
      url: '/ordenes',
      views: {
        'detalle-content@pagos.transferencias.detalle': {
            component: 'pagosTransferenciasDetalleOrdenes'
        }
      },
      resolve: {
        ordenesTransferencia: function($http, $transition$) {
          var params = $transition$.params();
          return params;
        }

      }
    });
}

})();
