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
    new Movie('Lord of the Rings The Fellowship of the Ring', 'PG-13', 'Fantasy/Action', 'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_UX182_CR0,0,182,268_AL_.jpg'),
    new Movie('Dumb and Dumber', 'PG-13', 'Comedy', 'http://t0.gstatic.com/images?q=tbn:ANd9GcRfKxcLRaftGDJ-q6WataYprMWOROBAhNPxuqjCUL8vaCA6ZaW1'),
    new Movie('Arrival', 'PG-13', 'Drama/Mystery', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWc_KuY4pIN3iHJFZbrkbHzbIaN0Gif2zQ44Kc60km5aiaPvx4BA'),
    new Movie('The Notebook', 'PG-13', 'Drama/Romance', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRych95HHZEw-RwvU4SHYGVrXvWtWplHpMwZJD92JF3DWkBpF6i')
  )
  ];
}
