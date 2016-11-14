import { Injectable } from '@angular/core';
import{Init} from './initCourses';

@Injectable()
export class CourseService extends Init {

    getCourses() : string[] {
        return JSON.parse(localStorage.getItem('courses'));
    };
    
  constructor() { 
      super();
      console.log('Courses service started...');
      this.load();
      
  };


    saveCourse(n){
        
        var temp =  JSON.parse(localStorage.getItem('courses'));
        temp.push(n);
        localStorage.setItem('courses',JSON.stringify(temp));
        
        
    };
    
    
    delCourse(todelete){
        
        var temp =  JSON.parse(localStorage.getItem('courses'));
        
        for(let i = 0; i<temp.length;i++)
    {
      if(temp[i]==todelete){
        temp.splice(i,1);
      }
    }
        
        localStorage.setItem('courses',JSON.stringify(temp));
        
    };
}
