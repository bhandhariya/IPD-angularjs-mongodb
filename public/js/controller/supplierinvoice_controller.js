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
      $scope.paymentf=function(ev) {
        $mdDialog.show({
          controller:clickController,
          templateUrl:'js/view/clickpayment.html',
          parent:angular.element(document.body),
          targetEvent:ev,
          clickOutsideToClose:true,
          fullscreen:$scope.customFullscreen
        })
        .then(function(answer) {
            alert('done')
        },function(){
          alert('not done')
        })
      }
      function clickController($scope,$http) {
        $scope.mon;
        $scope.checkbox=false;
        $scope.hidecheckbox=function(){
          $scope.checkbox=false;
        }
        $scope.showcheckbox=function() {
          $scope.checkbox=true;
        }
      }
      $scope.invoiceView=function(ev) {
        $mdDialog.show({
          controller:invoiceviewController,
          templateUrl:'js/view/invoiceview.html',
          parent:angular.element(document.body),
          targetEvent:ev,
          clickOutsideToClose:true,
          fullscreen:$scope.customFullscreen
        })
        .then(function(answer) {
            alert('done')
        },function(){
          alert('not done')
        })
      }
      function invoiceviewController($scope,$http) {

      }


  })
