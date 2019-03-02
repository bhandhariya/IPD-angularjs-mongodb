angular.module('addservice',[]).controller('addservicectrl',function($scope,$http){
   $scope.name;
   $scope.charge;
   $scope.Services;
   $scope.bgloid=0;
   $scope.create=function(){}
   $scope.tab=function(x){
       $scope.bgloid=x._id;
       console.log($scope.bgloid)
   }
   $scope.create=function(){
       var obj={
        hospital_id:'5c5bc734f2c5b4290885181d',
        charge:$scope.charge,
        name:$scope.name
       }
       $http.post('http://localhost:3000/service/createService',obj).then(function successCallBack(response){
            alert('done')
            $scope.fetchAllPatients()
        },function errorCallBack(response){
            console.log(response)
        })

   }
    
    $scope.onload=function(){
        this.getHospitalDetails();
        this.fetchAllPatients();
    }

    $scope.Alldetails={}
    $scope.getHospitalDetails=function(){
        var obj={
            id:'5c5bc734f2c5b4290885181d'
        }
        $http.post('http://localhost:3000/hospital/getAlldetails',obj).then(function successCallBack(response){
            $scope.Alldetails=(response.data)
        },function errorCallBack(response){
            console.log(response)
        })
    } 
    $scope.fetchAllPatients=function(){
        var obj={
            id:'5c5bc734f2c5b4290885181d'
        }
        $http.post('http://localhost:3000/service/findall',obj).then(function successCallBack(response){
            
            $scope.Services=(response.data)
        },function errorCallBack(response){
            console.log(response)
        })
    }  

    
    
})