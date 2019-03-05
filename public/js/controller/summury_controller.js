angular.module('summury',[]).controller('summuryctrl',function($scope,$http,$filter){
    
    $scope.today=$filter('date')(new Date(),'yyyy-MM-dd');
    $scope.selectDate;
    $scope.dayendData;
    $scope.myname=false;
    $scope.id="5c78ebcfbbf80c1ca0da57dc";
    $scope.totolserviceAmount;
    $scope.getHospitalDetails=function(){
        var obj={
            id:$scope.id
          }
          $http.post('http://localhost:3000/hospital/getAlldetails',obj).then(function successCallback(response){
              $scope.Alldetails=response.data;
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
              $scope.totolserviceAmount=$scope.dayendData.reduce((sum,item)=> sum+item.total,0);
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
              $scope.totolserviceAmount=$scope.dayendData.reduce((sum,item)=> sum+item.total,0);
          },function errorCallback(response){
              console.log(response)
          }) 
    }
    $scope.twoDate=function(){
        
    }
    $scope.startDate;
    $scope.endDate;
    $scope.gettwoDayBilling=function(){
        var startDate=$filter('date')($scope.startDate,'yyyy-MM-dd');
        var endDate=$filter('date')($scope.endDate,'yyyy-MM-dd');
        var obj={
            startDate:startDate,
            endDate:endDate
        }
        $http.post('http://localhost:3000/billing/billingbetweentwodays',obj).then(function successCallback(response){
            $scope.dayendData=response.data;
            $scope.totolserviceAmount=$scope.dayendData.reduce((sum,item)=> sum+item.total,0);
            console.log($scope.totolserviceAmount)
        },function errorCallback(response){
            console.log(response)
        }) 
    }
    $scope.biilingdone=function(){
        var startDate=$filter('date')($scope.startDate,'yyyy-MM-dd');
        var endDate=$filter('date')($scope.endDate,'yyyy-MM-dd');
        var obj={
            startDate:startDate,
            endDate:endDate
        }
        if(startDate===null && startDate===undefined){
            $scope.gettoDayBilling();
        }else if(startDate!=null && startDate!=undefined){
           $scope.gettwoDayBilling();
        }else if(startDate==null||undefined && endDate!=null||undefined){
            $scope.getDayBilling()
        }else{
            $scope.getDayBilling();
        }
    }
   
    
    
 })