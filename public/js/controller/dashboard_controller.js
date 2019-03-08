angular
  .module('dashborad', ['searchnewreceipt','duepayment','companypayment','patientadvance','ipdestimation','ipdbilling','makebill']).controller('dashboardctrl',function($scope,$http) {
      $scope.name="raja Saini Dashboard"
        // $scope.searchopdreceipt=function(){
        //   $http.get('http://localhost:3000/dashboard/searchopdreceipt')
        // }

  })
