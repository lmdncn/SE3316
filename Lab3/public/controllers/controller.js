
// App Controller
var myApp = angular.module('PostBlog', []);

myApp.controller('appCtrl', 
  function($scope,$http) 
  {
    console.log("Hello from app controller");
    
    
    window.setInterval(function(){
             refresh();
       }, 1000);
    
    
    var refresh = function(){
    $http.get('/api/List').success(function(response){
        
        console.log('got the data');
        $scope.showList = response;
        
        
    });
    
    };
    
    refresh();
    
    var newPost = function(hashtagKey){
        
        $scope.newEntry["hashtag"] = hashtagKey;
        
        console.log('New Entry is : ');
        console.log($scope.newEntry);
        
        $http.post('/api/List',$scope.newEntry).success(function(response){
        console.log(response);
        refresh();
        $scope.newEntry="";
    });
    
    };
    
    
    $scope.validateEntry= function(){
    var a = document.forms["sendF"]["A"].value;
    var t = document.forms["sendF"]["T"].value;
    
    if (a == null || a == ""||t == null || t == "")
    
    {
        alert("Your post lacks a feild!"); return;
    }
    
        
        //Search for Hashtag for additional function that hashtag doesn't have to be first
        //var tagindex = t.search("#");
        // if(!(tagindex>=0)){
        //     valid = false;
        //     alert("You need a hashtag #");
        //     return;
        // }
        
        var tagindex = t.search("#");
        if(tagindex!=0){
            alert("You need a hashtag:# st the start of your post!");
            return;
        }
        
        //This next part also workes for additional function of hashtag later in input
        
        //Has a hashtag so find space after hashtag
        var nextSpace = t.substring(tagindex).search(" ");
        
        //copy the string inbetween to save as key
        var hashtagKey =  t.substr(tagindex,nextSpace); //nextspcae is the ditance inbetween # and ' '
            
            newPost(hashtagKey);

        return;};
  
    
         
     
     
    
    
        

    
    
    
    
    
    

});

