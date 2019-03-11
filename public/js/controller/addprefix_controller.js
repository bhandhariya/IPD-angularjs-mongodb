angular.module('prefix',[]).controller('addprefixserctrl',function($scope,$http){
$scope.prefix;
$scope.suffix;
$scope.hospitalid="5c861ec82df421f8c5fc308d"
$scope.savePrefix=function(){
    var obj={
        prefix:$scope.prefix,
        hos:$scope.hospitalid
    }
    $http.post('http://localhost:3000/hospital/savePrefix',obj).then(function successCallback(responce){
        console.log(responce)
    },function errorCallback(responce){
        console.log(responce)
    })
}

$scope.saveSuffix=function(){
    var obj={
        suffix:$scope.suffix,
        hos:$scope.hospitalid
    }
    console.log(obj)
}

})