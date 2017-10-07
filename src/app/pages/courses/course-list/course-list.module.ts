import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CourseListComponent } from './course-list.component';
import { CourseItemModule } from '../course-item';
import { SortPipe } from './sort.pipe';
import { TransformPipe } from './transform.pipe';

@NgModule({
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    CourseItemModule
  ],
  exports: [
    CourseListComponent
  ],
  declarations: [
    CourseListComponent,
      SortPipe,
      TransformPipe
  ],
  providers: [
      SortPipe,
      TransformPipe
  ],
})

export class CourseListModule {
  constructor() {}
}
