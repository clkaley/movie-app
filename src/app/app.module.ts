import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [ //!component
    AppComponent,
    NavbarComponent
  ],
  imports: [ //!module
    BrowserModule
  ],
  providers: [], //!services
  bootstrap: [AppComponent] //!starter component
})
export class AppModule { }
