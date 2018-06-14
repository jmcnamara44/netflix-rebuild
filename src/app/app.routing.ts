import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieListComponent } from './movie-list/movie-list.component';
import { SearchMovieComponent } from './search-movie/search-movie.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { TvListComponent } from './tv-list/tv-list.component';
import { OriginalsComponent } from './originals/originals.component';
import { RecentlyAddedComponent } from './recently-added/recently-added.component';
import { MyListComponent } from './my-list/my-list.component';
import { DvdOnlyComponent } from './dvd-only/dvd-only.component';
import { AllListComponent } from './all-list/all-list.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'all-list',
    component: AllListComponent
  },
  {
    path: 'dvd-only',
    component: DvdOnlyComponent
  },
  {
    path: 'movie-list',
    component: MovieListComponent
  },
  {
    path: 'my-list',
    component: MyListComponent
  },
  {
    path: 'originals',
    component: OriginalsComponent
  },
  {
    path: 'recently-added',
    component: RecentlyAddedComponent
  },
  {
    path: 'search-movie',
    component: SearchMovieComponent
  },
  {
    path: 'tv-list',
    component: TvListComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
