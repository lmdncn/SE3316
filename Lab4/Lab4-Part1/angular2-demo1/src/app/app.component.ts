import { Component } from '@angular/core';
import {CoursesComponent} from './courses/courses.component'
import {AuthorsComponent} from './authors/authors.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
}
