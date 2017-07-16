(function() {
    'use strict';

var pagosTransferenciasDetalleOrdenesTodas = {
  bindings: {
    ordenesTransferencia: '<'
  },
  templateUrl: 'app/pagos/transferencias/detalle/ordenes/todas/todas.html',
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
      console.log('onGoTo ordenes.todas: ', event);
      $state.go('pagos.transferencias.detalle.ordenes.detalle', {
          postId: event.postId,
          id: event.id
      });
      console.log("evento: ", event);
    }
  }
}

angular
  .module('transferencias')
  .component('pagosTransferenciasDetalleOrdenesTodas', pagosTransferenciasDetalleOrdenesTodas)
  .config(config);

function config($stateProvider) {
  $stateProvider
    .state('pagos.transferencias.detalle.ordenes.todas', {
      parent: 'pagos.transferencias.detalle.ordenes',
      url: '/todas',
      views: {
        'ordenes-content@pagos.transferencias.detalle.ordenes': {
            component: 'pagosTransferenciasDetalleOrdenesTodas'
        }
      }
    });
}

})();
