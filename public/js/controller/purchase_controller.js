angular
  .module('purchase', ['ngMaterial']).controller('purchasectrl',function($scope,$http,$mdDialog,$routeParams) {
      $scope.name="supplierinvoicectrl";
      $scope.supplierID=$routeParams.sid;
      $scope.Supplier;
      $scope.onload=function() {
        $scope.getSupplierDetailsbyID();
      }
      $scope.getSupplierDetailsbyID=function() {
        var obj={
          id:$scope.supplierID
        }
        console.log(obj)
        $http.post('http://localhost:3000/supplier/findByID',obj).then(function successCallback(response){
          $scope.Supplier=response.data;
        },function errorCallback(response){
          console.log(response)
        })

      }


  })
