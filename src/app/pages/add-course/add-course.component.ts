import { Component, ViewEncapsulation, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';
import { CourseItem } from '../courses/course-item.model';
import { CoursesService } from '../courses/courses.service';

@Component({
  selector: 'cr-add-course',
  encapsulation: ViewEncapsulation.None,
  providers: [],
  styleUrls: [ './add-course.scss' ],
  templateUrl: './add-course.html'
})

export class AddCourseComponent implements OnDestroy {
    private subscription: Subscription;

    constructor(private router: Router, private coursesService: CoursesService) {
    }

    submit(data: CourseItem): void {
        this.subscription = this.coursesService.addCourse(data)
            .subscribe((): void => {
                    this.router.navigateByUrl('/courses');
                }
            );
    }

    ngOnDestroy(): void {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}
