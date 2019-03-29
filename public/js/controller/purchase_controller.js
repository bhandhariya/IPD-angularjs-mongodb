angular
  .module('purchase', ['ngMaterial']).controller('purchasectrl',function($scope,$http,$mdDialog,$routeParams) {
      $scope.name="supplierinvoicectrl";
      $scope.supplierID=$routeParams.sid;
      $scope.Supplier;
      $scope.Product;
      $scope.onload=function() {
        $scope.getSupplierDetailsbyID();
        $scope.getAllProductsOfSupplier();
      };
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
      };
      $scope.getAllProductsOfSupplier=function() {
        var obj={
          id:$scope.supplierID
        }
        console.log(obj);
        $http.post('http://localhost:3000/product/getAllProductsOfSupplier',obj).then(function successCallback(response){
          $scope.Product=response.data;
          console.log($scope.Product)
        },function errorCallback(response){
          console.log(response)
        })
      }



  })
