angular
  .module('addSupplier', ['ngMaterial']).controller('addSupplierctrl',function($scope,$http,$mdDialog,$rootScope) {
      $rootScope.onload=function() {
        $scope.find();
      }
      $scope.name="addSupplier"
      $scope.fullscreen=false;
      $scope.supplier={};
      $scope.showAdvanced=function(ev){
        $mdDialog.show({
          controller:DialogController,
          templateUrl:'js/view/newAddSupplier.html',
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
      $scope.find=function() {
        $http.get('http://localhost:3000/supplier/findAll').then(function successCallback(response){
          console.log(response);
          $scope.AllSuppliers=response.data;
        },function errorCallback(response){
          console.log(response);
        })
      }

      function DialogController($scope, $mdDialog) {
          $scope.hide = function() {
            $mdDialog.hide();
          };

          $scope.cancel = function() {
            $mdDialog.cancel();
          };

          $scope.answer = function(answer) {
            $http.post('http://localhost:3000/supplier/createSupplier',$scope.supplier).then(function successCallback(response){
              console.log(response);
              $mdDialog.hide(answer);
              $rootScope.onload();
            },function errorCallback(response){
              console.log(response);
            })

          };
        }


  })
