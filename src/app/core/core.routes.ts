import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '../../../node_modules/@angular/core';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

const coreRoutes: Routes = [
    { path: '', component: AboutComponent},
    { path: '', component: ContactComponent}
]
@NgModule({

})

export class CoreRoutingModule {

}





