import { Pipe, PipeTransform } from '@angular/core';
import { Movie } from './models/movie.model';

@Pipe({
  name: "completeness",
  pure: false
})

export class CompletenessPipe implements PipeTransform {
  transform(input: Movie[], type) {
    let output = {};
    let actionMovies: Movie[] = [];
    let comedyMovies: Movie[] = [];
    let thrillerMovies: Movie[] = [];
    let fantasyMovies: Movie[] = [];
    let dramaMovies: Movie[] = [];
    let romanceMovies: Movie[] = [];
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
    // console.log(type)
    output['Action'] = actionMovies;
    output['Comedy'] = comedyMovies;
    output['Thriller'] = thrillerMovies;
    output['Fantasy'] = fantasyMovies;
    output['Drama'] = dramaMovies;
    output['Romance'] = romanceMovies;
    console.log(output['Action']);
    console.log(comedyMovies);
    console.log(thrillerMovies);
    console.log(fantasyMovies);
    console.log(dramaMovies);
    console.log(romanceMovies);
    console.log(output);
    return output[type];
  }
}
