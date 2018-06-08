import { Component } from '@angular/core';
import { Movie } from './models/movie.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  masterMovieList: Movie[] = [
    new Movie('V for Vendetta', 'R', 'Action/Thriller'),
    new Movie('Lord of the Rings', 'PG-13', 'Fantasy/Action')
  ];
}
