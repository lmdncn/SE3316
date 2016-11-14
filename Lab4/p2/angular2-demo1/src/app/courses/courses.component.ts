import { Component, OnInit } from '@angular/core';
import{CourseService} from '../course.service';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
  providers: [CourseService]
})


export class CoursesComponent implements OnInit {
  text;
  courses;
  constructor(private courseService: CourseService) { 
    this.courses = courseService.getCourses();
  };

  ngOnInit(){};
  
  addCourse(){
    var n = this.text;
     this.text = "";
    this.courses.push(n);
    this.courseService.saveCourse(n);
    };
  
  deleteCourse(todelete){
    for(let i = 0; i<this.courses.length;i++)
    {
      if(this.courses[i]==todelete){
        this.courses.splice(i,1);
      }
    }
    
    this.courseService.delCourse(todelete);
  };

}
