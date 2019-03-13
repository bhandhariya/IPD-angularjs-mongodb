angular
  .module('searchnewreceipt', []).controller('SearchOPDReceiptctrl',function($scope,$http) {
      $scope.allBill=true;
      $scope.allID=true;
      $scope.allName=true;
      $scope.billid;
      $scope.name;
       $scope.BillingDetails;
      $scope.SerrchByBillID=function(){
        var obj={
          id:this.billid,
          name:this.name
        }
        console.log(obj)
        if(obj.id && !obj.name){
          $http.post('http://localhost:3000/billing/searchbyBillId',obj).then(function successCallBack(response){
             // $scope.BillingDetails=response.data
             // console.log($scope.BillingDetails)
             if(response.data){
               $scope.allBill=false;
               $scope.allID=false;
               $scope.allName=true
               $scope.BillingDetails=response.data
             }
          },function errorCallBack(response){
              console.log(response)
          })
        }else if(obj.name){
          $http.post('http://localhost:3000/billing/searchbyBillName',obj).then(function successCallBack(response){
             // $scope.BillingDetails=response.data
             // console.log($scope.BillingDetails)
             if(response.data){
               $scope.allBill=false;
               $scope.allID=true;
               $scope.allName=false;

               $scope.BillingDetails=response.data
               console.log(response);
               console.log($scope.BillingDetails);
             }
          },function errorCallBack(response){
              console.log(response)
          })
        }
      }
      $scope.onload=function(){
      $scope.getAllBillingTillToday();
      }
      $scope.getAllBillingTillToday=function() {
        $http.get('http://localhost:3000/billing/getAllBillingTillToday').then(function successCallBack(response){
           $scope.BillingDetails=response.data
           console.log($scope.BillingDetails)
        },function errorCallBack(response){
            console.log(response)
        })
      }


  })
