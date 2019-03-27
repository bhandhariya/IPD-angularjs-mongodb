angular
  .module('supplierwiseledger', ['ngMaterial']).controller('supplierwiseledgerctrl',function($scope,$http,$mdDialog,$routeParams) {
      $scope.name="supplierwiseledger";
      $scope.supplierID=$routeParams.sid;
      $scope.onload=function() {

      }


  })
