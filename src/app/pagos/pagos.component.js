(function() {
    'use strict';

var pagos = {
  templateUrl: 'app/pagos/pagos.html'
}

angular
  .module('pagos')
  .component('pagos', pagos)
  .config(config);

function config($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('pagos', {
      redirectTo: 'pagos.transferencias',
      url: '/pagos',
      views: {
        // parent-view
          'generador-content': {
            component: 'pagos'
          },
          // vista por defecto <div ui-view>
          '@': {
            component: 'pagos'
          },
          'pagos-menu@pagos': {
            component: 'pagosMenu'
          }
      }

    });

  $urlRouterProvider.otherwise('/pagos');
}


})();
