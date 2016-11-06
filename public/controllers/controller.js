
// App Controller
var myApp = angular.module('PostLove', []);

myApp.controller('appCtrl', 
  function($scope,$http) 
  {
    console.log("Hello from app controller");
    
    var refresh = function(){
    $http.get('/api/List').success(function(response){
        
        console.log('got the data');
        $scope.showList = response;
        $scope.newEntry="";
        
    });
    
    };
    
    refresh();
    
    var newPost = function(){
        console.log($scope.newEntry);
        $http.post('/api/List',$scope.newEntry).success(function(response){
        console.log(response);
        refresh();
    });
    
    };
    
    
    $scope.validateEntry= function(){
    var valid = true;
    var a = document.forms["sendF"]["A"].value;
    var t = document.forms["sendF"]["T"].value;
    
    if (a == null || a == "") { valid = false;
        angular.element( document.querySelector( '#a' ) ).addClass("has-error");}
        else{angular.element( document.querySelector( '#a' ) ).removeClass("has-error");}
        
        if(t == null || t == ""){ valid = false;
        angular.element( document.querySelector( '#t' ) ).addClass("has-error");}
        else{angular.element( document.querySelector( '#t' ) ).removeClass("has-error");}
        
        if(valid){newPost();}
        else{alert("Your post lacks a feild!");}
    
        return;
    };
         
     
     
    
    
        

    
    
    
    
    
    

});

