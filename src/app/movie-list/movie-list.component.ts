import { Component, Input } from '@angular/core';
import { Movie } from '../models/movie.model';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent {
  @Input() childMovieList: Movie[];
  action: string = 'Action';
  romance: string = 'Romance';
  thriller: string = 'Thriller';
  drama: string = 'Drama';
  fantasy: string = 'Fantasy';
  comedy: string = 'Comedy';
}
