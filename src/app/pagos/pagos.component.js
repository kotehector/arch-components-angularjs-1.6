(function() {
    'use strict';

var pagos = {
  templateUrl: 'app/pagos/pagos.html',
  controller: function($state, $transitions) {
    var ctrl = this;
    ctrl.infoMenu = [];

    ctrl.$onInit = function() {
      ctrl.infoMenu = [{
          titulo: 'Transferencias',
          estado: 'pagos.transferencias'
        },{
          titulo: 'Cheques',
          estado: 'pagos.cheques'
        },{
          titulo: 'Nóminas',
          estado: 'pagos.nominas'
        },{
          titulo: 'Confirming',
          estado: 'pagos.confirming'
        }];
    }

    ctrl.$postLink = function() {
      ctrl.uiState = $state.current;
        console.log(ctrl.uiState);
    }

    ctrl.uiCanExit = function() {
        console.log('exiting...');
        return window.confirm('¿Seguro que quieres salir?');
    }

    var myTransition = $transitions.onStart({
      to: 'pagos.*'
    }, function($transition$) {
      // code
    });

    ctrl.$onDestroy = function() {
      myTransition()
    }
  }
}

angular
  .module('pagos')
  .component('pagos', pagos)
  .config(config);

function config($stateProvider) {
  $stateProvider
    .state('pagos', {
      redirectTo: 'pagos.transferencias',
      url: '/pagos',
      data: {
        requiredAuth: true
      },
      onEnter: function() {
        console.log('onEnter');
      },
      onExit: function() {
        console.log('onExit');
      },
      onRetain: function() {
        console.log('onRetain');
      },
      views: {
        // parent-view
          'generador-content': {
            component: 'pagos'
          },
          // vista por defecto <div ui-view>
          '@': {
            component: 'pagos'
          }
      }

    });
}


})();
