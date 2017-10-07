import { NgModule } from '@angular/core';
import { CourseItemHeaderComponent } from './course-item-header.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
      CommonModule
  ],
  exports: [
    CourseItemHeaderComponent
  ],
  declarations: [
    CourseItemHeaderComponent
  ],
  providers: [],
})

export class CourseItemHeaderModule {
  constructor() {}
}
