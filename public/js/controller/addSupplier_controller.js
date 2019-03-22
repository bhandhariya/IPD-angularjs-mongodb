angular
  .module('addSupplier', ['ngMaterial']).controller('addSupplierctrl',function($scope,$http,$mdDialog,$rootScope,$location) {
      $rootScope.onload=function() {
        $scope.find();
      }
      $scope.gotoInvoice=function(i) {
         $location.path('/supplierinvoice/'+ i._id)
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
          $scope.company;

          $scope.cancel = function() {
            $mdDialog.cancel();
          };

          $scope.answer = function(answer) {
            var obj={
              name:this.supplier.name,
              address:this.supplier.address,
              email:this.supplier.email,
              phone:this.supplier.phone,
              note:this.supplier.note,
              day_visit:this.supplier.day,
              company_supplied:this.raja
            }
            console.log(obj)
            $http.post('http://localhost:3000/supplier/createSupplier',obj).then(function successCallback(response){
              console.log(response);
              $mdDialog.hide(answer);
              $rootScope.onload();
            },function errorCallback(response){
              console.log(response);
            })

          };
          $scope.arr;
          $scope.raja=[];
          $scope.addCompany=function(){
            // $scope.supplier.company=$scope.supplier.company.push($scope.company)
            // console.log($scope.supplier.company)
              $scope.raja.push(this.arr)
              this.arr=""

          }
        }



  })
