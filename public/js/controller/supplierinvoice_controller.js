angular
  .module('supplierinvoice', ['ngMaterial']).controller('supplierinvoicectrl',function($scope,$http,$mdDialog,$routeParams) {
      $scope.name="supplierinvoicectrl";
      $scope.supplierID=$routeParams.sid;
      $scope.onload=function() {
        
      }


  })
