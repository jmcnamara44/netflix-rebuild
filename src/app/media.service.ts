import { Injectable } from '@angular/core';
import { Media } from './models/media.model';
import { MEDIA } from './mock-media';

@Injectable()
export class MediaService {

  constructor() { }
  getMedia() {
    return MEDIA;
  }
}
