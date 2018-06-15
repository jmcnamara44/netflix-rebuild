import { Component, Input } from '@angular/core';
import { Media } from '../models/media.model';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent {
  @Input() childMovieList: Media[];
  // action: string = 'Action';
  // romance: string = 'Romance';
  // thriller: string = 'Thriller';
  // drama: string = 'Drama';
  // fantasy: string = 'Fantasy';
  // comedy: string = 'Comedy';
}
