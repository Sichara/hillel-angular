import {
    Component, ViewEncapsulation, Output, EventEmitter, OnInit, Input
} from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { CourseItem } from '../../pages/courses/course-item.model';

@Component({
    selector: 'cr-course-form',
    templateUrl: './course-form.html',
    styleUrls: [ './course-form.scss' ],
    encapsulation: ViewEncapsulation.None
})
export class CourseFormComponent implements OnInit {
    @Input() course: CourseItem = {
        name: '',
        id: 0,
        date: null,
        description: '',
        duration: 0
    };

    @Output() onSubmit: EventEmitter<CourseItem> = new EventEmitter<CourseItem>();

    // formGroup: FormGroup;

    constructor(private formBuilder: FormBuilder) {
    }

    ngOnInit(): void {
        // this.formGroup = this.formBuilder.group({
        //     name: [this.course.name, [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
        //     description: [this.course.description, [
        //         Validators.required,
        //         Validators.minLength(2),
        //         Validators.maxLength(500)
        //     ]],
        //     date: [this.course.date],
        //     duration: [this.course.duration]
        // });
    }

    formatToDateString(): string {
        const date: Date = new Date();

        return date.toDateString();
    }

    submit(event: NgForm): void {
        console.log(event);

        event.value.date = this.formatToDateString();

        if (event.valid) {
            this.onSubmit.emit(event.value);
        }
    }
}
