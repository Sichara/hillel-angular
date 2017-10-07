import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home';
import { NoContentComponent } from './shared/no-content';
import { EditCourseComponent } from './pages/edit-course/edit-course.component';

const ROUTES: Routes = [
	{path: '', redirectTo: 'home', pathMatch: 'full'},
	{path: 'home', component: HomeComponent},
	{path: 'edit-course/:id', component: EditCourseComponent},
	{path: 'edit-course/:id/:title', component: EditCourseComponent},
	{path: '**', component: NoContentComponent}
];

export const routes = RouterModule.forRoot(ROUTES, {
    useHash: false,
    preloadingStrategy: PreloadAllModules}
    );
