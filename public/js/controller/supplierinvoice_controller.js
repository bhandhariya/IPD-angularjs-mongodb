angular
  .module('supplierinvoice', ['ngMaterial']).controller('supplierinvoicectrl',function($scope,$http,$mdDialog,$routeParams,$location) {

      $scope.supplierID=$routeParams.sid;
      $scope.onload=function() {
        this.getSupplierDetailsbyID();
      }
      $scope.gotopurchase=function(){
        $location.path('/purchase/'+$scope.supplierID)

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
