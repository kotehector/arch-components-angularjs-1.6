(function() {
    'use strict';

var cobros = {
  templateUrl: 'app/cobros/cobros.html'
}

angular
  .module('cobros')
  .component('cobros', cobros)
  .config(config);

function config($stateProvider) {
  $stateProvider
    .state('cobros', {
      url: '/cobros',
      data: {
        requiredAuth: true
      },
      views: {
        'generador-content': {
            component: 'cobros'
        }
      }

    });
}

})();
