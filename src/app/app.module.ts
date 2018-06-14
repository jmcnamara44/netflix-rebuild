import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CompletenessPipe } from './completeness.pipe';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { MovieListComponent } from './movie-list/movie-list.component';
import { SearchMovieComponent } from './search-movie/search-movie.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { TvListComponent } from './tv-list/tv-list.component';
import { OriginalsComponent } from './originals/originals.component';
import { RecentlyAddedComponent } from './recently-added/recently-added.component';
import { MyListComponent } from './my-list/my-list.component';
import { DvdOnlyComponent } from './dvd-only/dvd-only.component';
import { AllListComponent } from './all-list/all-list.component';
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database'

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    SearchMovieComponent,
    CompletenessPipe,
    WelcomeComponent,
    TvListComponent,
    OriginalsComponent,
    RecentlyAddedComponent,
    MyListComponent,
    DvdOnlyComponent,
    AllListComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
