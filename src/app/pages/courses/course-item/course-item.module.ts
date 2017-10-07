import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CourseItemComponent } from './course-item.component';
import { CourseItemHeaderModule } from '../course-item-header';
import { CourseItemDescriptionModule } from '../course-item-description';
import { CourseItemActionsModule } from '../course-item-actions';
import { CommonModule } from '@angular/common';
import { BackgroundDirective } from './background.directive';

@NgModule({
    imports: [
        ReactiveFormsModule,
        FormsModule,
        CourseItemHeaderModule,
        CourseItemDescriptionModule,
        CourseItemActionsModule,
        CommonModule
    ],
    exports: [
        CourseItemComponent
    ],
    declarations: [
        CourseItemComponent,
        BackgroundDirective
    ],
    providers: []
})

export class CourseItemModule {
    constructor() {
    }
}
