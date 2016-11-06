
// App Controller
var myApp = angular.module('PostLove', []);

myApp.controller('appCtrl', 
  function($scope,$http) 
  {
    console.log("Hello from app controller");
    
    var refresh = function(){
    $http.get('/api/postList').success(function(response){
        
        console.log('got the data');
        $scope.postList = response;
        $scope.newEntry="";
        
    });
    
    };
    
    refresh();
    
    
    
    $scope.newPost = function(){
        console.log($scope.newEntry);
        $http.post('/api/postList',$scope.newEntry).success(function(response){
        console.log(response);
        refresh();
    });
        
    };
    
    
    
    
    
    

});

