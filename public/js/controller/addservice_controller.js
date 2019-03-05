angular.module('addservice',[]).controller('addservicectrl',function($scope,$http){
   $scope.name;
   $scope.namename;
   $scope.chargecharge;
   $scope.charge;
   $scope.Services;
   $scope.bgloid=0;
   $scope.id;
   $scope.create=function(){}
   $scope.delete=function(x){
    var obj={
        id:x
      }
      $http.post('http://localhost:3000/service/deletebyid',obj).then(function successCallBack(response){
           
            $scope.fetchAllPatients()
        },function errorCallBack(response){
            console.log(response)
        })

   }
   $scope.editAppKey=function(field){
    //     $scope.editing =$scope.Services.indexOf(field)
    //    console.log($scope.editing)
    //    $scope.newField =angular.copy(field);
    //    console.log($scope.newField)
    //    console.log(field)
    $scope.id=field._id;
    console.log($scope.id)
    
   }
   $scope.saveField=function(){
       if($scope.editing !==false){
        var obj={
            id:$scope.id,
            name:this.namename,
            charge:this.chargecharge
          }
          $http.post('http://localhost:3000/service/update',obj).then(function successCallBack(response){
           
            $scope.fetchAllPatients()
        },function errorCallBack(response){
            console.log(response)
        })
          
        
        $scope.editing = false;
       }
   }
   $scope.cancel = function() {
    if ($scope.editing !== false) {
        
        $scope.editing = false;
    } 
}
   $scope.create=function(){
       var obj={
        hospital_id:'5c78ebcfbbf80c1ca0da57dc',
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
            id:'5c78ebcfbbf80c1ca0da57dc'
        }
        $http.post('http://localhost:3000/hospital/getAlldetails',obj).then(function successCallBack(response){
            $scope.Alldetails=(response.data)
        },function errorCallBack(response){
            console.log(response)
        })
    } 
    $scope.fetchAllPatients=function(){
        var obj={
            id:'5c78ebcfbbf80c1ca0da57dc'
        }
        $http.post('http://localhost:3000/service/findall',obj).then(function successCallBack(response){
            
            $scope.Services=(response.data)
        },function errorCallBack(response){
            console.log(response)
        })
    }  

    
    
})