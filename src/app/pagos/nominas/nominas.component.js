(function() {
    'use strict';

var pagosNominas = {
  templateUrl: 'app/pagos/nominas/nominas.html',
  controller: function($state) {
    var ctrl = this;

    ctrl.$onInit = function() {};

    ctrl.$postLink = function() {
      ctrl.uiState = $state.current;
        console.log(ctrl.uiState);
    };
  }
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
