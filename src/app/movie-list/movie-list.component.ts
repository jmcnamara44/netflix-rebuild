import { Component, OnInit } from '@angular/core';
import { Media } from '../models/media.model';
import { MediaService } from '../media.service';
import { Router } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
  providers: [MediaService]
})
export class MovieListComponent implements OnInit {

  movie: string = "Movie";
  media: FirebaseListObservable<any[]>;
  genreType;

  constructor(private router: Router, private mediaService: MediaService) { }

  ngOnInit() {
    this.media = this.mediaService.getMedia();
    this.genreType = this.mediaService.getGenres();
  }
}
