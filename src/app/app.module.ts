import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CategoryComponent } from './category/category.component';
import { MoviesComponent } from './movies/movies.component';

@NgModule({
  declarations: [ //!component
    AppComponent,
    NavbarComponent,
    CategoryComponent,
    MoviesComponent
  ],
  imports: [ //!module
    BrowserModule
  ],
  providers: [], //!services
  bootstrap: [AppComponent] //!starter component
})
export class AppModule { }
