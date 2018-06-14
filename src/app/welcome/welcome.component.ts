import { Component, OnInit } from '@angular/core';
import { Media } from '../models/media.model';
import { MediaService } from '../media.service';
import { Router } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  providers: [MediaService]
})
export class WelcomeComponent implements OnInit {

  media: FirebaseListObservable<any[]>;
  // genreList = MediaService.genreType;
  constructor(private router: Router, private mediaService: MediaService) { }

  ngOnInit() {
    this.media = this.mediaService.getMedia();
  }

}
