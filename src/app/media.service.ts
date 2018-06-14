import { Injectable } from '@angular/core';
import { Media } from './models/media.model';
// import { MEDIA } from './mock-media';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class MediaService {
  media: FirebaseListObservable<any[]>;
  
  constructor(private database: AngularFireDatabase) {
    this.media = database.list('media');
  }
  getMedia() {
    return this.media;
  }
}
