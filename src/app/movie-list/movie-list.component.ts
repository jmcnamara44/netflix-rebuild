import { Component, Input, OnInit } from '@angular/core';
import { Media } from '../models/media.model';
import { MediaService } from '../media.service';
import { Router } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
  providers: [MediaService  ]
})
export class MovieListComponent implements OnInit {

  movie: string = "Movie";
  tv: string = "TV";
  media: FirebaseListObservable<any[]>;
  genreType;

  constructor(private router: Router, private mediaService: MediaService) { }

  ngOnInit() {
    this.media = this.mediaService.getMedia();
    this.genreType = this.mediaService.getGenres();
  }
  // @Input() childMovieList: Media[];
  // action: string = 'Action';
  // romance: string = 'Romance';
  // thriller: string = 'Thriller';
  // drama: string = 'Drama';
  // fantasy: string = 'Fantasy';
  // comedy: string = 'Comedy';
}
