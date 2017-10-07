import { Component, EventEmitter, Output, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'cr-course-search',
    templateUrl: 'course-search.html',
    styleUrls: ['./course-search.scss'],
    providers: [],
    encapsulation: ViewEncapsulation.None
})

export class CourseSearchComponent {
    @Output() search: EventEmitter<string> = new EventEmitter();

    searchString: string;

    constructor() {
    }

    onSearch(searchString: string) {
        console.log(searchString);
        this.search.emit(searchString);
    }
}
