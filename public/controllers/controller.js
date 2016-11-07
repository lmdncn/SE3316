








// App Controller
var myApp = angular.module('PostPaperNG', []);

var up = true; //semephore so it doesnt update when posting and update when updating

myApp.controller('appCtrl', 
  function($scope,$http) 
  {
         window.setInterval(function(){
             if(up){
         update();}
        }, 1000);
  
    var refresh = function(){
        up = false;
        update();
        $scope.newEntry="";
        up = true;
        };
    
    
     var update = function(){
    $http.get('/api/List').success(function(response){
        $scope.showList = response;
        console.log("Updated");
    });
    
    };
    
    refresh();
    
    var newPost = function(hashtagKey){
        up = false;
        $scope.newEntry["hashtag"] = hashtagKey;
        
        console.log('New Entry is : ');
        console.log($scope.newEntry);
        
        $http.post('/api/List',$scope.newEntry).success(function(response){
        console.log(response);
        refresh();
        up = true;
    });
    
    };
    
    
    $scope.validateEntry= function(){
        
    var valid = true;
    var a = document.forms["sendF"]["A"].value;
    var t = document.forms["sendF"]["T"].value;
    
    if (a == null || a == ""||t == null || t == "")
    
    {
        alert("Your post lacks a feild!"); return;
    }
    
        
        //Search for Hashtag
        var tagindex = t.search("#");

        if(!(tagindex>=0)){
            valid = false;
            alert("You need a hashtag #");
            return;
        }

        //Has a hashtag so find space after hashtag
        
        var nextSpace = t.substring(tagindex).search(" ");
        
        //copy the string inbetween to save as key
        var hashtagKey =  t.substr(tagindex,nextSpace); //nextspcae is the ditance inbetween # and ' '
            
            newPost(hashtagKey);

        return;};
  
    
         
     
     
    
    
        

    
    
    
    
    
    

});

