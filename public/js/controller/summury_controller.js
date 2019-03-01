angular.module('summury',[]).controller('summuryctrl',function($scope,$http,$filter){
    
    $scope.today=$filter('date')(new Date(),'yyyy-MM-dd');
    $scope.selectDate;
    $scope.dayendData;
    $scope.id="5c5bc734f2c5b4290885181d";
    $scope.totolserviceAmount;
    $scope.getHospitalDetails=function(){
        var obj={
            id:$scope.id
          }
          $http.post('http://localhost:3000/hospital/getAlldetails',obj).then(function successCallback(response){
              $scope.Alldetails=response.data;
              console.log($scope.Alldetails)
              $scope.gettoDayBilling();
          },function errorCallback(response){
              console.log(response)
          })
    }
    $scope.getDayBilling=function(){
        var datttt=$filter('date')($scope.selectDate,'yyyy-MM-dd')
        var obj={
            billing_date:datttt
        }
        $http.post('http://localhost:3000/billing/billingAtDayEnd',obj).then(function successCallback(response){
              $scope.dayendData=response.data;
              console.log($scope.dayendData)
              $scope.totolserviceAmount=$scope.dayendData.reduce((sum,item)=> sum+item.total,0);
              console.log($scope.totolserviceAmount)
          },function errorCallback(response){
              console.log(response)
          })       
    }
    $scope.gettoDayBilling=function(){
        var obj={
            billing_date:$scope.today
            
          }
          $http.post('http://localhost:3000/billing/billingAtDayEnd',obj).then(function successCallback(response){
              $scope.dayendData=response.data;
              console.log($scope.dayendData)
              $scope.totolserviceAmount=$scope.dayendData.reduce((sum,item)=> sum+item.total,0);
              console.log($scope.totolserviceAmount)
          },function errorCallback(response){
              console.log(response)
          }) 
    }
    
    
 })