import { Component, OnInit } from '@angular/core';
import { Media } from '../models/media.model';
import { MediaService } from '../media.service';
import { Router } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-originals',
  templateUrl: './originals.component.html',
  styleUrls: ['./originals.component.css'],
  providers: [MediaService]
})
export class OriginalsComponent implements OnInit {
  movie: string = "Movie";
  media: FirebaseListObservable<any[]>;
  genreType;

  constructor(private router: Router, private mediaService: MediaService) { }

  ngOnInit() {
    this.media = this.mediaService.getMedia();
    this.genreType = this.mediaService.getGenres();
  }
}
