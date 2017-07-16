(function() {
    'use strict';

var tablaDatos = {
  bindings: {
    url: '@',
    columns: '<',
    onGoTo: '&'
  },
  templateUrl: 'app/componentes/tabla-datos/tabla-datos.html',
  controller: function($scope, $state, DTOptionsBuilder, DTColumnBuilder) {
    var ctrl = this;
    ctrl.dtColumns = [];
    ctrl.rowData = {};
    ctrl.selectItem = selectItem;

    ctrl.$onInit = function() {
      ctrl.dtColumns = ctrl.columns;

      ctrl.dtOptions = DTOptionsBuilder.newOptions()
        .withOption('ajax', {
            contentType: 'application/json',
            url: ctrl.url,
            type: 'GET'
        })
        .withPaginationType('full_numbers')
        .withPaginationType('simple')
        .withOption('order', [0,'asc'])
        .withOption('rowCallback', getDataRow);

    };

    ctrl.$postLink = function() {
      ctrl.uiState = $state.current;
        console.log(ctrl.uiState);
    }

    function selectItem(info) {
      ctrl.rowData = info;
      //$scope.$emit('goTo', item);
      console.log(info);
      ctrl.onGoTo({
          $event : {
              id: info.id
          }
      });
    }

    function getDataRow(nRow, aData, iDisplayIndex, iDisplayIndexFull) {
        // Unbind first in order to avoid any duplicate handler (see https://github.com/l-lin/angular-datatables/issues/87)
        $('td', nRow).unbind('click');
        $('td', nRow).bind('click', function() {
            $scope.$apply(function() {
                ctrl.selectItem(aData);
            });
        });
        return nRow;
    }


  }
}

angular
  .module('componentes')
  .component('tablaDatos', tablaDatos);

})();
