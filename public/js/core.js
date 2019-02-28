angular.module('myApp',['register','addservice','billing','ngRoute','ngMaterial']).config(
  function($routeProvider){
    $routeProvider.
    when("/addservice",{
      templateUrl : "/js/view/addservice.html",
      controller:'addservicectrl'
    }).
    when("/addprefic",{
      templateUrl : "/js/view/addprefix.html",
      controller:function addprefixserctrl($scope){
      }
    }).
    when("/billing",{
      templateUrl : "/js/view/billing.html",
      controller:'billingctrl'
    }).
    when("/summury",{
      templateUrl : "/js/view/summury.html",
      controller:function summuryctrl($scope){
      }
    }).
    otherwise({
      template : "<h1>None</h1><p>Nothing has been selected</p>"
    });
    
  }
)

angular.module('myApp').
  component('appheader', {
    templateUrl: '/js/view/header.html',
    controller: function headerctrl($scope) {
      
    }
  }).
  component('appfooter', {
    templateUrl: '/js/view/footer.html',
    controller: function footerctrl($scope) {
      
    }
  });
