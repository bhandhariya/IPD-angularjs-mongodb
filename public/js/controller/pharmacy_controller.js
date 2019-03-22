angular
  .module('pharmacy', ['addSupplier','product','productbill','purchaseorder','supplierinvoice','ngMaterial']).controller('pharmacyctrl',function($scope,$http,$mdDialog) {
      $scope.name="pharmacy";


  })
