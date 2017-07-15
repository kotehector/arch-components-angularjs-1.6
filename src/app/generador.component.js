(function() {
    'use strict';

var generadorWeb = {
  templateUrl: 'app/generador.html',
  controller: function($state) {
    var ctrl = this;

    ctrl.$onInit = function() {

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
