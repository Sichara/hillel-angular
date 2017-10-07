import { Injectable } from '@angular/core';
import { CourseItem } from './course-item.model';

import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { Http, RequestOptions, Response } from '@angular/http';

@Injectable()
export class CoursesService {

    private courseListSubject: Subject<CourseItem[]> = new Subject();

    constructor(private http: Http) {
    }

    deleteCourse(id: number): void {
        // this.courseList.splice(index, 1);
        //
        // this.saveToStorage(this.courseList);
        //
        // this.courseListSubject.next(this.courseList);

        console.log(id);

        const requestParams = new RequestOptions();

        this.http.delete(`api/course-list/${id}`)
            .subscribe();
    }

    getCourseList(): Observable<CourseItem[]> {
        console.log('get');

        return this.http.get('api/course-list')
            .map((data: Response) => data.json().data);
    }

    addCourse(course: CourseItem): Observable<Response> {
        // this.courseList.push(course);
        //
        // this.saveToStorage(this.courseList);

        return this.http.post('api/course-list', course);
    }

    editCourse(courseToEdit: CourseItem): Observable<Response> {
        // const foundCourse: CourseItem = this.courseList.find((course: CourseItem) => {
        //     return course.id === courseToEdit.id;
        // });

        // Object.assign(foundCourse, courseToEdit);

        // this.saveToStorage(this.courseList);

        return this.http.put(`api/course-list/${courseToEdit.id}`, courseToEdit);
    }

    getCourseById(id: string): Observable<CourseItem> {
        // return {...this.courseList.find((course: CourseItem) => course.id === id)};
        return this.http.get(`api/course-list/${id}`).map((res: Response) => res.json());
    }

    private saveToStorage(courseList: CourseItem[]): void {
        localStorage.setItem('list', JSON.stringify(courseList));
    }
}
