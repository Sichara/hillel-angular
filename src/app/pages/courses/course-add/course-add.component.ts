import { Component, EventEmitter, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'cr-course-add',
  templateUrl: 'course-add.html',
  styleUrls: [ './course-add.scss' ],
  providers: [],
  encapsulation: ViewEncapsulation.None
})

export class CourseAddComponent {
    @Output() addCourse: EventEmitter<null> = new EventEmitter();
  constructor() {
  }

  public clickHandler() {
    console.log('add course');

    this.addCourse.emit();
  }
}
