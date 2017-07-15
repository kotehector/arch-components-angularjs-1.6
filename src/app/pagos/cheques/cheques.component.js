(function() {
    'use strict';

var pagosCheques = {
  templateUrl: 'app/pagos/cheques/cheques.html'
}

angular
  .module('pagos')
  .component('pagosCheques', pagosCheques)
  .config(config);

function config($stateProvider) {
  $stateProvider
    .state('cheques', {
      parent: 'pagos',
      url: '/cheques', // borrar toda la url del padre
      views: {
        'pagos-content@pagos': {
            component: 'pagosCheques'
        }
      }
    });
}

})();
