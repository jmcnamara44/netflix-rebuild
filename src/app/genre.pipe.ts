import { Pipe, PipeTransform } from '@angular/core';
import { Media } from './models/media.model';

@Pipe({
  name: "genre",
  pure: false
})

export class GenrePipe implements PipeTransform {
  transform(input: Media[], genreType) {
    let output = {};
    let actionMedia: Media[] = [];
    let comedyMedia: Media[] = [];
    let thrillerMedia: Media[] = [];
    let fantasyMedia: Media[] = [];
    let dramaMedia: Media[] = [];
    let romanceMedia: Media[] = [];
    let horrorMedia: Media[] = [];
    let scienceFictionMedia: Media[] = [];
    let mysteryMedia: Media[] = [];
    for (let x = 0; x<input.length; x++) {
      for (let y = 0; y<input[x].genre.length; y++) {
        if (input[x].genre[y] == 'Action') {
          actionMedia.push(input[x]);
        } else if (input[x].genre[y] == 'Comedy') {
          comedyMedia.push(input[x]);
        } else if (input[x].genre[y] == 'Thriller') {
          thrillerMedia.push(input[x]);
        } else if (input[x].genre[y] == 'Fantasy') {
          fantasyMedia.push(input[x]);
        } else if (input[x].genre[y] == 'Drama') {
          dramaMedia.push(input[x]);
        } else if (input[x].genre[y] == 'Romance') {
          romanceMedia.push(input[x]);
        } else if (input[x].genre[y] == 'Horror') {
          horrorMedia.push(input[x]);
        } else if (input[x].genre[y] == 'Science Fiction') {
          scienceFictionMedia.push(input[x]);
        } else if (input[x].genre[y] == 'Mystery') {
          mysteryMedia.push(input[x]);
        }
      }
    }
    output['Action'] = actionMedia;
    output['Comedy'] = comedyMedia;
    output['Thriller'] = thrillerMedia;
    output['Fantasy'] = fantasyMedia;
    output['Drama'] = dramaMedia;
    output['Romance'] = romanceMedia;
    output['Horror'] = horrorMedia;
    output['Science Fiction'] = scienceFictionMedia;
    output['Mystery'] = mysteryMedia;
    return output[genreType];
  }
}
