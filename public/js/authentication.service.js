angular.module('myApp').factory('AuthenticationService',Service);
function Service($http,$localStorage){
  var service={}
  service.Login=Login;
  service.Logout=Logout;
  return service;

  function Login(username,password,callback) {
    
  }
}
