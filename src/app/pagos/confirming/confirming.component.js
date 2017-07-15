(function() {
    'use strict';

var pagosConfirming = {
  templateUrl: 'app/pagos/confirming/confirming.html'
}

angular
  .module('pagos')
  .component('pagosConfirming', pagosConfirming)
  .config(config);

function config($stateProvider) {
  $stateProvider
    .state('pagos.confirming', {
      //parent: 'pagos',
      url: '/confirming',
      views: {
        'pagos-content@pagos': {
            component: 'pagosConfirming'
        }
      }
    });
}

})();
