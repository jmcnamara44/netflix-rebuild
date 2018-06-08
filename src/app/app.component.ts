import { Component } from '@angular/core';
import { Movie } from './models/movie.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  masterMovieList: Movie[] = [
    new Movie('V for Vendetta', 'R', 'Action/Thriller', 'https://is4-ssl.mzstatic.com/image/thumb/Video20/v4/05/41/f0/0541f062-5839-22f5-b58f-32bb244fb755/source/1200x630bb.jpg'),
    new Movie('Lord of the Rings The Fellowship of the Ring', 'PG-13', 'Fantasy/Action', 'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_UX182_CR0,0,182,268_AL_.jpg')
  ];
}
