import { NgModule } from '@angular/core';
import { HeaderModule } from './header';
import { FooterModule } from './footer';
import { LogoModule } from './logo';
import { NavbarModule } from './navbar';
import { AuthDropDownModule } from './auth-drop-down';
import { NoContentModule } from './no-content';
import { CrButtonModule } from './button';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CourseFormModule } from './course-form';

@NgModule({
    imports: [
        HeaderModule,
        FooterModule,
        LogoModule,
        NavbarModule,
        AuthDropDownModule,
        NoContentModule,
        CrButtonModule,
        CourseFormModule
    ],
    exports: [
        HeaderModule,
        FooterModule,
        LogoModule,
        NavbarModule,
        AuthDropDownModule,
        NoContentModule,
        CrButtonModule,
        CommonModule,
        FormsModule,
        CourseFormModule
    ],
    declarations: [],
    providers: []
})
export class SharedModule {
}
