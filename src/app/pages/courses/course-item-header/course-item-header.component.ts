import { Component, ViewEncapsulation, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'cr-course-item-header',
  templateUrl: 'course-item-header.html',
  styleUrls: [ './course-item-header.scss' ],
  providers: [],
  encapsulation: ViewEncapsulation.None
})

export class CourseItemHeaderComponent {
  @Input() public courseName: string;
  @Input() public courseDuration: number;
  @Input() public courseDate: Date;

  test: Observable<string>;

  constructor() {
  }
}
