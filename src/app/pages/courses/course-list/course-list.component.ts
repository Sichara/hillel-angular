import {
    Component, ViewEncapsulation, Input, EventEmitter, Output, OnInit, ViewChild, AfterViewInit, ViewChildren,
    QueryList, AfterContentInit, OnChanges, SimpleChanges
} from '@angular/core';
import { CourseItem } from '../course-item.model';
import { CourseItemComponent } from '../course-item/course-item.component';

@Component({
  selector: 'cr-course-list',
  templateUrl: 'course-list.html',
  styleUrls: [ './course-list.scss' ],
  providers: [],
  encapsulation: ViewEncapsulation.None
})

export class CourseListComponent implements AfterViewInit, OnChanges {
  @Input() public courseList: CourseItem[];
  @Input() filterString: string = '';

  @Output() deleteCourse: EventEmitter<number> = new EventEmitter();

  @ViewChildren(CourseItemComponent) courseItemComponent: QueryList<CourseItemComponent>;

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  ngAfterViewInit(): void {
  }

    onDeleteCourse(index: number): void {
        this.deleteCourse.emit(index);
    }
}
