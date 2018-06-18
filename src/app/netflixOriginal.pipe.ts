import { Pipe, PipeTransform } from '@angular/core';
import { Media } from './models/media.model';

@Pipe({
  name: "netflixOriginal",
  pure: false
})

export class NetflixOriginalPipe implements PipeTransform {
  transform(input: Media[]) {
    let netflix: Media[] = [];
    for (let x = 0; x<input.length; x++) {
      if (input[x].netflixOriginal == true) {
        netflix.push(input[x]);
      }
    }

    return netflix;
  }
}
