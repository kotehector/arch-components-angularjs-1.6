(function() {
    'use strict';

var pagosTransferenciasTodas = {
  templateUrl: 'app/pagos/transferencias/todas/todas.html',
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
