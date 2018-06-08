import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { SearchMovieComponent } from './search-movie/search-movie.component';


@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    SearchMovieComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
