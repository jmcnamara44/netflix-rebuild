import { Pipe, PipeTransform } from '@angular/core';
import { Movie } from './models/movie.model';

@Pipe({
  name: "completeness",
  pure: false
})

export class Completeness Pipe implements PipeTransform {
  tranform(input: Movie[]) {
    let movieGenre: object[] = []; //make this a dictionary and push arrays to it?
    let actionMovies: Movie[] =  [];
    let thrillerMovies: Movie[] =  [];
    let fantasyMovies: Movie[] =  [];
    let dramaMovies: Movie[] =  [];
    let comedyMovies: Movie[] =  [];
    let romanceMovies: Movie[] =  [];

    for (let i = 0; i< input.length; i++) {
      for (let j = 0; j<input.genre.length; j++) {
        if (input[i].genre[j] === "Action") {
          actionMovies.push(input[i]);
        } else if (input[i].genre[j] === "Thriller") {
          thrillerMovies.push(input[i]);
        }  else if (input[i].genre[j] === "Fantasy") {
          fantasyMovies.push(input[i]);
        } else if (input[i].genre[j] === "Drama") {
          dramaMovies.push(input[i]);
        } else if (input[i].genre[j] === "Comedy") {
          comedyMovies.push(input[i]);
        } else if (input[i].genre[j] === "Romance") {
          romanceMovies.push(input[i]);
        }
      }
    }
    return movieGenre;
  }
}
