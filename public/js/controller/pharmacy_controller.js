angular
  .module('pharmacy',
  ['addSupplier',
  'product',
  'productbill',
  'purchaseorder',
  'supplierinvoice',
  'supplierwiseledger',
  'purchase',
  'ngMaterial']).controller('pharmacyctrl',function($scope,$http,$mdDialog) {
      $scope.name="pharmacy";


  })
