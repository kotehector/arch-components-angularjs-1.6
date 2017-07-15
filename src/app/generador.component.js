(function() {
    'use strict';

var generadorWeb = {
  templateUrl: 'app/generador.html',
  controller: function($state) {
    var ctrl = this;
    ctrl.infoMenu = [];

    ctrl.$onInit = function() {
      ctrl.infoMenu = [{
          titulo: 'Pagos',
          estado: 'pagos'
        },{
          titulo: 'Cobros',
          estado: 'cobros'
        },{
          titulo: 'Admin',
          estado: 'admin'
        }];

    }

    ctrl.$postLink = function() {
      ctrl.uiState = $state.current;
        console.log(ctrl.uiState);
    }
  }
}

angular
  .module('generador')
  .component('generadorWeb', generadorWeb);

})();
