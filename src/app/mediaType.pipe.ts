import { Pipe, PipeTransform } from '@angular/core';
import { Media } from './models/media.model';

@Pipe({
  name: "mediaType",
  pure: false
})

export class MediaTypePipe implements PipeTransform {
  transform(input: Media[], mediumType) {
    let output = {};
    let movies: Media[] = [];
    let tv: Media[] = [];

    for (let x = 0; x<input.length; x++) {
      if (input[x].mediaType == 'Movie') {
        movies.push(input[x]);
      } else if (input[x].mediaType == 'TV') {
        tv.push(input[x]);
      }
    }
    output['Movie'] = movies;
    output['TV'] = tv;
    return output[mediumType];
  }
}
