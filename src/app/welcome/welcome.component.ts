import { Component, OnInit } from '@angular/core';
import { Media } from '../models/media.model';
import { MediaService } from '../media.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  providers: [MediaService]
})
export class WelcomeComponent implements OnInit {

  media: Media[];
  action: string = 'Action';
  romance: string = 'Romance';
  thriller: string = 'Thriller';
  drama: string = 'Drama';
  fantasy: string = 'Fantasy';
  comedy: string = 'Comedy';
  constructor(private router: Router, private mediaService: MediaService) { }

  ngOnInit() {
    this.media = this.mediaService.getMedia();
  }

}
