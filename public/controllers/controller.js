
// App Controller
var myApp = angular.module('PostLove', []);

myApp.controller('appCtrl', 
  function($scope,$http) 
  {
    console.log("Hello from app controller");
    
    $http.get('/api/postList').success(function(response){
        
        console.log('got the data');
        $scope.postList = response;
        
    })
    

});

