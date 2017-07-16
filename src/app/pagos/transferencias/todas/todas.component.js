(function() {
    'use strict';

var pagosTransferenciasTodas = {
  templateUrl: 'app/pagos/transferencias/todas/todas.html',
  controller: function($state, DTColumnBuilder) {
    var ctrl = this;

    ctrl.url = 'https://jsonplaceholder.typicode.com/posts';
    ctrl.columnsDT = [];

    ctrl.$onInit = function() {
      ctrl.columnsDT = [
        DTColumnBuilder.newColumn('id').withTitle('ID'),
        DTColumnBuilder.newColumn('title').withTitle('Title'),
        DTColumnBuilder.newColumn('body').withTitle('Body')
      ];

    };

    ctrl.$postLink = function() {
      ctrl.uiState = $state.current;
        console.log(ctrl.uiState);
    }

    ctrl.goTo = function(event) {
      console.log("evento: ", event);
      $state.go('pagos.transferencias.detalle', {
          id: event.id
      });
      console.log("evento: ", event);
    }
  }
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
