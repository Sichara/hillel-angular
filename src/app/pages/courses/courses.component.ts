import { Component, ViewEncapsulation, OnInit, OnDestroy, Inject, Optional } from '@angular/core';
import { CourseItem } from './course-item.model';
import { CoursesService } from './courses.service';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/combineLatest';

import 'rxjs/add/observable/throw';
import 'rxjs/add/observable/empty';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/from';

import Timer = NodeJS.Timer;
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Router } from '@angular/router';

@Component({
    selector: 'cr-courses',
    encapsulation: ViewEncapsulation.None,
    providers: [
        CoursesService
    ],
    styleUrls: ['./courses.scss'],
    templateUrl: './courses.html'
})

export class CoursesComponent implements OnInit, OnDestroy {
    public courseList$: Observable<CourseItem[]>;

    filterStringSubject: BehaviorSubject<string> = new BehaviorSubject('');

    observable: Observable<number>;
    subject: Subject<number> = new Subject();
    refreshSubject: BehaviorSubject<void> = new BehaviorSubject(null);

    interval: Timer;

    constructor(private coursesService: CoursesService,
                @Inject('Value') @Optional() private someValue: number,
                private router: Router) {
    }

    public ngOnInit(): void {
        // this.courseList$ = this.filterStringSubject
        //     .switchMap((filterString: string) => {
        //         return this.coursesService.getCourseItems()
        //             .map((courseList: CourseItem[]) => {
        //                 return this.filterCourses(filterString, courseList);
        //             });
        //     });

        // this.courseList$ = this.filterStringSubject
        //     .combineLatest(this.coursesService.getCourseItems())
        //     .map(([filterString, courseList]: [string, CourseItem[]]) => {
        //         return this.filterCourses(filterString, courseList);
        //     });

        this.courseList$ = this.refreshSubject
            .switchMap(() => this.filterStringSubject
                .combineLatest(
                    this.coursesService.getCourseList()
                )
                .map(([filterString, courseList]: [string, CourseItem[]]) => {
                    console.log(filterString);
                    console.log(courseList);

                    return this.filterCourses(filterString, courseList);
                })
            );

        // this.interval = setInterval(() => {
        //     this.subject.next(Math.round(Math.random() * 100));
        // }, 5000);
        //
        // this.observable = this.subject.asObservable()
        //     .do((htmlData: number) => console.log(htmlData, 'pure data'))
        //     .share();
        //
        // let subscription: Subscription = this.observable
        //     .filter((data: number) => data > 20)
        //     .subscribe((newData: number) => console.log(newData, 'modified data'));
    }

    onSearch(searchString: string): void {
        this.filterStringSubject.next(searchString);

        this.subject.next(10000000);
    }

    public ngOnDestroy(): void {
        clearInterval(this.interval);
    }

    onDeleteCourse(index: number): void {
        this.coursesService.deleteCourse(index);
        this.refreshSubject.next(null);
    }

    filterCourses(searchString: string, courseList: CourseItem[]): CourseItem[] {
        return courseList.filter((course: CourseItem) => {
            return course.name.toLowerCase().indexOf(searchString.toLowerCase()) !== -1;
        });
    }

    onAddCourse(): void {
        this.router.navigate(['courses/new']);
    }
}
