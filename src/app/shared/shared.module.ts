import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';


@NgModule({
    declarations: [
    ],
    exports: [
        CommonModule,
    ],
    providers: [
        // ConfigurationService,
        // DataService,
        // SecurityService,
        // StorageService,
        // {
        //     provide: HTTP_INTERCEPTORS,
        //     useClass: JwtInterceptor,
        //     multi: true
        // },
        //fakeBackendProvider
    ]
})
export class SharedModule {

}
