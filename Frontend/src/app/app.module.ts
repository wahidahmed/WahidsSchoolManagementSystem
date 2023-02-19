import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CreateClassComponent } from './master/CreateClass/CreateClass.component';
import { CreateSectionComponent } from './master/CreateSection/CreateSection.component';

@NgModule({
  declarations: [
    AppComponent
    ,CreateClassComponent
    ,CreateSectionComponent
  ],
  imports: [
    BrowserModule
    ,AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
