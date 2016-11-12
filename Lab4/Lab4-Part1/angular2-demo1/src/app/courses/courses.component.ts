import { Component, OnInit } from '@angular/core';
import{CourseService} from '../course.service';
import{AutoGrowDirective} from '../auto-grow.directive'

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
  providers: [CourseService]
})


export class CoursesComponent implements OnInit {

  title = "Title of the courses page!";
  courses;
  constructor(courseService: CourseService) { 
    this.courses = courseService.getCourses();
  }

  ngOnInit() {
  }

}
