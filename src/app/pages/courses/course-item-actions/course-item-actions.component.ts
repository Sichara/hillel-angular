import { Component, EventEmitter, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'cr-course-item-actions',
  templateUrl: 'course-item-actions.html',
  styleUrls: [ './course-item-actions.scss' ],
  providers: [],
  encapsulation: ViewEncapsulation.None
})

export class CourseItemActionsComponent {
    @Output() deleteCourse: EventEmitter<any> = new EventEmitter();
  constructor() {
  }

  editCourse() {
    console.log('edit course');
  }

  onDeleteCourse() {
    this.deleteCourse.emit();
  }
}
