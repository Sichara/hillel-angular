import { NgModule } from '@angular/core';

import { EditCourseComponent } from './edit-course.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
    imports: [RouterModule, CommonModule, SharedModule],
    exports: [EditCourseComponent],
    declarations: [EditCourseComponent],
    providers: []
})
export class EditCourseModule {
}
