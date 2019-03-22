angular
  .module('product', ['ngMaterial','toastr']).controller('productctrl',function($scope,$http,$mdDialog,$rootScope,toastr) {
      $scope.name="product";
      $scope.AllSuppliersData;
      $scope.onload=function() {
        $scope.getAlldataforProduct();
      }
      $scope.getAlldataforProduct=function(){
        $http.get("http://localhost:3000/product/find").then(function successCallback(response) {
          $scope.product=response.data;
          console.log($scope.product)
        },function errorCallback(response) {
          console.log(response);
        })
      }
      $scope.fullscreen=false;
      $scope.supplier;

      $scope.showAdvanced=function(ev){
        $mdDialog.show({
          controller:AddProductController,
          templateUrl:'js/view/addProduct.html',
          parent:angular.element(document.body),
          targetEvent:ev,
          clickOutsideToClose:true,
          fullscreen:$scope.customFullscreen
        })
        .then(function(answer) {
        $scope.getAlldataforProduct();
        },function(){
          $scope.getAlldataforProduct();
        })
      }
      function AddProductController($scope,$mdDialog,$http){
        $scope.hide=function(){
          $mdDialog.hide();
        };
        $scope.cancel=function(){
          $mdDialog.cancel();
        }
        $scope.answer=function(answer){
          $http.post("http://localhost:3000/product/create",$scope.supplier).then(function successCallback(response) {
            if(response.data="product Saved"){
              toastr.success("product saved ");
              $scope.hide();

            }

          },function errorCallback(response) {
            console.log(response);
          })
        }
        $scope.getDiscountPrice=function(){
          $scope.supplier.discount=$scope.supplier.mrp-$scope.supplier.sellingPrice;
        }
        $scope.getSellingPrice=function(){
          $scope.supplier.sellingPrice=$scope.supplier.mrp-$scope.supplier.discount;
        }

        $scope.getAllSuppliers=function () {
          $http.get("http://localhost:3000/supplier/findAll").then(function successCallback(response) {
            $scope.data=(response.data);
            console.log($scope.data)

          },function errorCallback(response) {
            console.log(response);
          })
        }


      }

  })
