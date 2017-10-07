import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular2-in-memory-web-api';
import { CourseItem } from './pages/courses/course-item.model';

@Injectable()
export class InMemoryCoursesService implements InMemoryDbService {
    private courseList: CourseItem[] = [{
        id: 1,
        name: 'name 12',
        duration: 4000,
        date: new Date(),
        description: 'description 1',
        hide: false
    }, {
        id: 2,
        name: 'name 22',
        duration: 3000,
        date: new Date(),
        description: 'description 2',
        hide: true
    }, {
        id: 3,
        name: 'name 33',
        duration: 5000,
        date: new Date(),
        description: 'description 3'
    }];

    constructor() {
    }

    createDb() {

        // 'api/course-list'
        return {
            'course-list': this.courseList
        };
    }
}
