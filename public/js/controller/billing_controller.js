angular.module('billing',[]).controller('billingctrl',function($scope,$http,$filter){
    $scope.name='raja';
    $scope.hos_id='5c5bc734f2c5b4290885181d';
    $scope.data;
    $scope.pid;
    $scope.dtttt;
    $scope.Services;
    $scope.tottal;
    $scope.patServices;
    $scope.somevalye={}
    $scope.billigdata;
    $scope.detailsosService;
    $scope.findbyname=function(){
        var obj={
            name:this.name
        }
        $http.post('http://localhost:3000/patient/findbynameall',obj).then(function successCallback(response){
            $scope.data=response.data;
            console.log($scope.data)
            $scope.raja=false;
            $scope.saini=true;
        },function errorCallback(response){
            console.log(response)
        })
    }
    $scope.test=function(x){
        $scope.pid=x;
        var obj={
            id:$scope.hos_id
        }
        $http.post('http://localhost:3000/hospital/getallService',obj).then(function successCallback(response){
            $scope.raja=true;
            $scope.saini=false;
            $scope.Services=response.data;
           console.log($scope.Services)
        },function errorCallback(response){
            console.log(response)
        })
        $scope.getOnePat();

    }
    $scope.getOnePat=function(){
        var obj2={
            id:$scope.pid
        }
        $http.post('http://localhost:3000/patient/getonePatientDetail',obj2).then(function successCallback(response){
            $scope.detailsosService=(response.data.BillingDetails)        
            console.log($scope.detailsosService)    

        },function errorCallback(response){
            console.log(response)
        })
    }
    

    $scope.addnewcategories=function(){
        var serviceid= $scope.somevalye._id;
        var obj={
            serviceid:serviceid,
            patientid:$scope.pid,
            hospitalid:$scope.hos_id,
          }
         
          console.log(obj)
          $http.post('http://localhost:3000/patient/addServiceToPatient',obj).then(function successCallback(response){
            
            $scope.dtttt=response.data;
           console.log($scope.dtttt)
           var raja=($scope.dtttt.BillingDetails)
           $scope.tottal=raja.reduce((sum,item)=> sum+item.charge,0);
           $scope.patServices=$scope.dtttt.services;
           console.log($scope.patServices)
           console.log($scope.tottal)
          $scope.getOnePat()

        },function errorCallback(response){
            console.log(response)
        })

       

    }

    $scope.bill=function(){
        var obj={
            billids:$scope.patServices,
            patid:$scope.pid,
            hos_id:$scope.hos_id,
            total:$scope.tottal,
            billing_date:$filter('date')(new Date(),'yyyy-MM-dd')
          }
          console.log(obj)
          $http.post('http://localhost:3000/patient/billinggg',obj).then(function successCallback(response){
            
            $scope.billigdata=response.data;
           if($scope.billigdata){
               alert('billing Done')
               $scope.getOnePat()
           }
           $scope.getOnePat()

        },function errorCallback(response){
            console.log(response)
        })
    }
    $scope.deleteservicebyid=function(x){
        var obj={
            serviceid:x,
            patid:this.pid
        }
        $http.post('http://localhost:3000/patient/deleteservicebyid',obj).then(function successCallback(response){
            
            $scope.getOnePat();

        },function errorCallback(response){
            console.log(response)
        })
    }

    $scope.raja;
    $scope.saini;
   

     
 })