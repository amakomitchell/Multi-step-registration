import { NgModule } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
    declarations: [
        HeaderComponent,
        HomeComponent,
        FooterComponent,
        AboutComponent,
        ContactComponent
    ],
    imports: [
        SharedModule,
        AppRoutingModule,
    ],
    exports: [
        AppRoutingModule,
        HeaderComponent,
        FooterComponent
    ]
})
export class CoreModule {

}