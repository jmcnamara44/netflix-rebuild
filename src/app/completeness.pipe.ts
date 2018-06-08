import { Pipe, PipeTransform } from '@angular/core';
import { Movie } from './models/movie.model';

@Pipe({

})

export class Completeness Pipe implements PipeTransform {
  tranform(input: Movie[]) {
    var movieGenre: Movie[] = [];
    for (var i = 0; i< input.length; i++) {
      for (var j = 0; j<input.genre.length; j++) {
        if (input[i].genre[j] === "Action") {
          movieGenre.push(input[i]);
        } else if (input[i].genre[j] === "Thriller") {
          movieGenre.push(input[i]);
        }  else if (input[i].genre[j] === "Fantasy") {
          movieGenre.push(input[i]);
        } else if (input[i].genre[j] === "Drama") {
          movieGenre.push(input[i]);
        } else if (input[i].genre[j] === "Comedy") {
          movieGenre.push(input[i]);
        } else if (input[i].genre[j] === "Romance") {
          movieGenre.push(input[i]);
        }
      }
    }
    return movieGenre;
  }
}
