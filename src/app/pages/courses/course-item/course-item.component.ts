import { Component, ViewEncapsulation, Input, EventEmitter, Output, OnDestroy } from '@angular/core';
import { CourseItem } from '../course-item.model';

@Component({
  selector: 'cr-course-item',
  templateUrl: 'course-item.html',
  styleUrls: [ './course-item.scss' ],
  providers: [],
  encapsulation: ViewEncapsulation.None
})

export class CourseItemComponent implements OnDestroy {
  @Input() public course: CourseItem;

  @Output() deleteCourse: EventEmitter<null> = new EventEmitter();

  constructor() {
  }

    onDeleteCourse(): void {
      this.deleteCourse.emit();
    }

    ngOnDestroy(): void {
      console.log(this.course, 'On Destroy!!!!!!!');
    }
}
