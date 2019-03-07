angular.module('myApp',['register','addservice','billing','summury','prefix','dashborad','ngRoute','ngMaterial']).config(
  function($routeProvider){
    $routeProvider.
    when("/addservice",{
      templateUrl : "/js/view/addservice.html",
      controller:'addservicectrl'
    }).
    when("/addprefic",{
      templateUrl : "/js/view/addprefix.html",
      controller: 'addprefixserctrl'
    }).
    when("/billing",{
      templateUrl : "/js/view/billing.html",
      controller:'billingctrl'
    }).
    when("/summury",{
      templateUrl : "/js/view/summury.html",
      controller:'summuryctrl'
    }).
    when("/dashboard",{
      templateUrl : "/js/view/dashboard.html",
      controller:'dashboardctrl'
    }).
    when("/test",{
      templateUrl : "/js/view/SearchOPDReceipt.html",
      controller:'SearchOPDReceiptctrl'
    }).
    when("/duepayment",{
      templateUrl : "/js/view/duepayment.html",
      controller:'duepaymenttctrl'
    }).
    when("/companypayment",{
      templateUrl : "/js/view/companypayment.html",
      controller:'companypaymentctrl'
    }).
    when("/patientadvance",{
      templateUrl : "/js/view/patientadvance.html",
      controller:'patientadvancectrl'
    }).
    when("/ipdestimation",{
      templateUrl : "/js/view/ipdestimation.html",
      controller:'ipdestimationctrl'
    }).
    when("/ipdbilling",{
      templateUrl : "/js/view/ipdbilling.html",
      controller:'ipdbilling'
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
