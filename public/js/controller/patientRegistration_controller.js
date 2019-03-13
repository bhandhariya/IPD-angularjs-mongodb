angular
  .module('patient', ['toastr']).controller('patientRegistrationctrl',function($scope,$http,toastr) {
    var self = this;
              // self.user={id:null,username:'',address:'',email:''};
              // self.id = 4;
              //
              // self.users = [// In future posts, we will get it from server using service
              //         {id:1, username: 'Sam', address: 'NY', email: 'sam@abc.com'},
              //         {id:2, username: 'Tomy', address: 'ALBAMA', email: 'tomy@abc.com'},
              //         {id:3, username: 'kelly', address: 'NEBRASKA', email: 'kelly@abc.com'}
              // ];
              self.user={}


              self.submit = function() {
                  // if(self.user.id === null){
                  //     self.user.id = self.id++;
                  //     console.log('Saving New User', self.user);
                  //     self.users.push(self.user);//Or send to server, we will do it in when handling services
                  // }else{
                  //     for(var i = 0; i < self.users.length; i++){
                  //         if(self.users[i].id === self.user.id) {
                  //           self.users[i] = self.user;
                  //           break;
                  //         }
                  //     }
                  //    console.log('User updated with id ', self.user.id);
                  // }
                  // self.reset();

                  $http.post('http://localhost:3000/create',self.user).then(function successCallback(response){
                if(response){
                  console.log(response)
                  toastr.success(response.data)
                }
                // self.reset();

                  },function errorCallback(response){
                      console.log(response)
                  })
              };



              self.reset = function(){
                  self.user={};
                  $scope.myForm.$setPristine(); //reset Form
              }

  })
