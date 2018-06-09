import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CompletenessPipe } from './completeness.pipe';

import { AppComponent } from './app.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { SearchMovieComponent } from './search-movie/search-movie.component';


@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    SearchMovieComponent,
    CompletenessPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
