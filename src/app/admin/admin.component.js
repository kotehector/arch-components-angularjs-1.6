(function() {
    'use strict';

var admin = {
  templateUrl: 'app/admin/admin.html'
}

angular
  .module('admin')
  .component('admin', admin)
  .config(config);

function config($stateProvider) {
  $stateProvider
    .state('admin', {
      url: '/admin',
      views: {
        'generador-content': {
            component: 'admin'
        }
      }
    })
}


})();
