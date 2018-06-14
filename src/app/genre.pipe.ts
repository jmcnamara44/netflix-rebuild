import { Pipe, PipeTransform } from '@angular/core';
import { Media } from './models/media.model';

@Pipe({
  name: "genre",
  pure: false
})

export class GenrePipe implements PipeTransform {
  transform(input: Media[], genreType) {
    let output = {};
    let actionMovies: Media[] = [];
    let comedyMovies: Media[] = [];
    let thrillerMovies: Media[] = [];
    let fantasyMovies: Media[] = [];
    let dramaMovies: Media[] = [];
    let romanceMovies: Media[] = [];
    for (let x = 0; x<input.length; x++) {
      for (let y = 0; y<input[x].genre.length; y++) {
        if (input[x].genre[y] == 'Action') {
          actionMovies.push(input[x]);
        } else if (input[x].genre[y] == 'Comedy') {
          comedyMovies.push(input[x]);
        } else if (input[x].genre[y] == 'Thriller') {
          thrillerMovies.push(input[x]);
        } else if (input[x].genre[y] == 'Fantasy') {
          fantasyMovies.push(input[x]);
        } else if (input[x].genre[y] == 'Drama') {
          dramaMovies.push(input[x]);
        } else if (input[x].genre[y] == 'Romance') {
          romanceMovies.push(input[x]);
        }
      }
    }
    output['Action'] = actionMovies;
    output['Comedy'] = comedyMovies;
    output['Thriller'] = thrillerMovies;
    output['Fantasy'] = fantasyMovies;
    output['Drama'] = dramaMovies;
    output['Romance'] = romanceMovies;
    return output[genreType];
  }
}
