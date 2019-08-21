import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomValidators } from './custom.validators';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { LoginComponent } from './login/login.component';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthGuard, AuthenticationService, UserService } from './index';
import { JwtInterceptor } from './jwt.interceptor';
import { ErrorInterceptor } from '../shared/helpers/error.interceptor';

import { OAuthModule } from 'angular-oauth2-oidc';

import { SettingsComponent } from './register/settings/settings.component';
import { UserRegComponent } from './register/user-reg/user-reg.component';
import { PreferencesComponent } from './register/preferences/preferences.component';
import { RegistrationNavComponent } from './register/reg-nav/reg-nav.component';
import { RegisterComponent } from './register/register.component';


@NgModule({
    declarations: [
        LoginComponent,
        UserRegComponent,
        SettingsComponent,
        UserRegComponent,
        PreferencesComponent,
        RegistrationNavComponent,
        RegisterComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        AuthRoutingModule,
        OAuthModule.forRoot()
    ],
    providers: [
        AuthGuard,
        AuthenticationService,
        UserService,
        CustomValidators,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: JwtInterceptor,
            multi: true
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: ErrorInterceptor,
            multi: true
        },  
    ]
})
export class AuthModule {

}