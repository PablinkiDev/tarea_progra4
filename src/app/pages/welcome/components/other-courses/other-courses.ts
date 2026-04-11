import { Component, inject } from '@angular/core';
import { CoursesService } from '../../../../services/courses-service';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-other-courses',
  imports: [RouterLink],
  templateUrl: './other-courses.html',
})
export class OtherCourses {
  courseService = inject(CoursesService);
  courses = this.courseService.getCourses();

  
}
