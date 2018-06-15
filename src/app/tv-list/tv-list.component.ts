import { Component, OnInit } from '@angular/core';
import { Media } from '../models/media.model';
import { MediaService } from '../media.service';
import { Router } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-tv-list',
  templateUrl: './tv-list.component.html',
  styleUrls: ['./tv-list.component.css'],
  providers: [MediaService]
})
export class TvListComponent implements OnInit {

  tv: string = "TV";
  media: FirebaseListObservable<any[]>;
  genreType;

  constructor(private router: Router, private mediaService: MediaService) { }

  ngOnInit() {
    this.media = this.mediaService.getMedia();
    this.genreType = this.mediaService.getGenres();
  }

}
