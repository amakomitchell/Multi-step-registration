import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './auth/index';
import { LoginComponent } from './auth/login/login.component';
import { UserRegComponent } from './auth/register/user-reg/user-reg.component';
import { SettingsComponent } from './auth/register/settings/settings.component';
import { PreferencesComponent } from './auth/register/preferences/preferences.component';
import { RegisterComponent } from './auth/register/register.component';

const appRoutes: Routes = [

    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
    // // { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' }, //implemented lazy loading here
    { path: '**', redirectTo: '' }
]
@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}