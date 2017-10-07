// angular modules
import { NgModule } from '@angular/core';

// routes
import { RouterModule } from '@angular/router';
import { addCourseRoutes } from './add-course.routes';

// custom components
import { AddCourseComponent } from './add-course.component';
import { SharedModule } from '../../shared/index';

@NgModule({
  declarations: [
    AddCourseComponent
  ],
  imports: [
    RouterModule.forChild(addCourseRoutes),
    SharedModule
  ],
  providers: []
})
export class AddCourseModule {
  constructor() {}
}
