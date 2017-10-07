import { Routes } from '@angular/router';
import { CoursesComponent } from './courses.component';

export const coursesRoutes: Routes = [
	{
	    path: 'courses',
        component: CoursesComponent,
        children: [
            {
                path: 'add',
                component: CoursesComponent
            }
        ]
    },
];
