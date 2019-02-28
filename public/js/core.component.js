angular.module('component').
  component('appheader', {
    templateUrl: '/js/header.html',
    controller: function headerctrl($scope) {
      $scope.header='hearajader'
    }
  });