import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CoursesService } from '../courses/courses.service';
import { Observable } from 'rxjs/Observable';
import { CourseItem } from '../courses/course-item.model';

@Component({
    selector: 'cr-edit-course',
    templateUrl: './edit-course.component.html',
    // styleUrls: ['./edit-course.component.css']
})

export class EditCourseComponent implements OnInit, OnDestroy {
    courseItem$: Observable<CourseItem>;

    id: number;

    constructor(private route: ActivatedRoute,
                private router: Router,
                private courseService: CoursesService) {
    }

    ngOnInit() {
        console.log('INIT!!!!!');

        this.courseItem$ = this.route.params
            .switchMap((routerParams: Params) => {
                return this.courseService.getCourseById(routerParams['id']);
            });


    }

    ngOnDestroy() {
        console.log('DESTROY!!!!!');
    }
}
