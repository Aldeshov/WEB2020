import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { InitialComponent } from './initial/initial.component';
import { AppRoutingModule } from './app-routing.module';
import { InMemoryDataService } from './in-memory-data.service';
import { FirstPageComponent } from './first-page/first-page.component';
import { CourseFilesComponent } from './course-files/course-files.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    InitialComponent,
    FirstPageComponent,
    CourseFilesComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
