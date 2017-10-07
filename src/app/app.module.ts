import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {
    NgModule,
    ApplicationRef
} from '@angular/core';
import {
    removeNgStyles,
    createNewHosts
} from '@angularclass/hmr';
import {
    RouterModule,
    PreloadAllModules
} from '@angular/router';

/*
 * Platform and Environment providers/directives/pipes
 */
import { ENV_PROVIDERS } from './environment';
import { routes } from './app.routes';
// App is our top level component
import { AppComponent } from './app.component';
// import { NoContentComponent } from './shared';

// Components

// Pages
import {
    HomeModule,
    CoursesModule,
    LoginModule,
    AddCourseModule
} from './pages';

import { SharedModule } from './shared/shared.module';
import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';
import { InMemoryCoursesService } from './in-memory-db';
import { EditCourseModule } from './pages/edit-course/edit-course.module';

// Services

// import { TodoService } from './core/services';

// Application wide providers
// const APP_PROVIDERS = [
// 	TodoService
// ];

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
    bootstrap: [AppComponent],
    declarations: [
        AppComponent
    ],
    imports: [ // import Angular's modules
        BrowserModule,
        FormsModule,
        HttpModule,
        routes,
        HomeModule,
        CoursesModule,
        AddCourseModule,
        LoginModule,
        SharedModule,
        InMemoryWebApiModule.forRoot(InMemoryCoursesService),
        EditCourseModule
    ],
    providers: [ // expose our Services and Providers into Angular's dependency injection
        ENV_PROVIDERS
        // APP_PROVIDERS
    ]
})
export class AppModule {

    constructor(public appRef: ApplicationRef) {
    }

    public hmrOnInit(store: any) {
        if (!store || !store.state) {
            return;
        }
        this.appRef.tick();
        delete store.state;
    }

    public hmrOnDestroy(store: any) {
        const cmpLocation = this.appRef.components.map((cmp) => cmp.location.nativeElement);
        // recreate elements
        store.disposeOldHosts = createNewHosts(cmpLocation);
        // remove styles
        removeNgStyles();
    }

    public hmrAfterDestroy(store: any) {
        // display new elements
        store.disposeOldHosts();
        delete store.disposeOldHosts;
    }

}
