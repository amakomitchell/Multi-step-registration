import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { AlertComponent } from './alert/index';

import { AlertService } from './shared/services/alert.service';

import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { AuthModule } from './auth/auth.module';
import { AppRoutingModule } from './app-routing.module';
import { DashboardModule } from './dashboard/dashboard.module';

@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
  ],
  imports: [
    BrowserModule,
    AuthModule,
    AppRoutingModule,    
    HttpClientModule,
    SharedModule,
    CoreModule,
    
    DashboardModule
  ],
  providers: [
    AlertService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
