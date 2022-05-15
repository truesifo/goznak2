import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { LoginNgxsComponent } from './components/login-ngxs/login-ngxs.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { IntroductionComponent } from './components/static/introduction/introduction.component';
import { NavBarComponent } from './components/static/nav-bar/nav-bar.component';
import { NgxsModule } from '@ngxs/store';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';
import { AuthenticationService } from './services/authentication.service';

@NgModule({
    declarations: [AppComponent, LoginNgxsComponent, IntroductionComponent, NavBarComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MaterialModule,
        NoopAnimationsModule,
        ReactiveFormsModule,
        FormsModule,
        NgxsModule.forRoot([]),
        NgxsStoragePluginModule.forRoot({
            key: ['auth.username', 'auth.loggedIn'],
        }),
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
