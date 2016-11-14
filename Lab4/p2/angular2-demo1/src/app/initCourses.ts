export class Init{
    
    load(){
        
        if(localStorage.getItem('courses') == null ||localStorage.getItem('courses') == undefined ||  JSON.parse(localStorage.getItem('courses')).length == 0)
        {
            
        console.log('No courses found, using examples');
        
        var c : String [] = ['Example Course 1', 'Example Course 2', 'Example Course 3'];
            
            
        localStorage.setItem('courses',JSON.stringify(c));
        return;
        }else{console.log('Found Courses');}
        
    }
    
    
}