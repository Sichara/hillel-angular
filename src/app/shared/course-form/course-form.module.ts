import { NgModule } from '@angular/core';
import { CourseFormComponent } from './course-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CrButtonModule } from '../button/button.module';

@NgModule({
	declarations: [CourseFormComponent],
	imports: [
	    FormsModule,
        ReactiveFormsModule,
        CommonModule,
        CrButtonModule
    ],
	exports: [CourseFormComponent]
})

export class CourseFormModule {
}
