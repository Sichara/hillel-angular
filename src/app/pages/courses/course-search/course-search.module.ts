import { NgModule } from '@angular/core';
import { CourseSearchComponent } from './course-search.component';
import { CrButtonModule } from '../../../shared/button';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
      FormsModule,
    CrButtonModule
  ],
  exports: [
    CourseSearchComponent
  ],
  declarations: [
    CourseSearchComponent
  ],
  providers: [],
})

export class CourseSearchModule {
  constructor() {}
}
