(function() {
    'use strict';

var menu = {
  bindings: {
    info: '='
  },
  templateUrl: 'app/componentes/menu/menu.html'
}

angular
  .module('componentes')
  .component('menu', menu);

})();
