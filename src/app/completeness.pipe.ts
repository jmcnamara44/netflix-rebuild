import { Pipe, PipeTransform } from '@angular/core';
import { Movie } from './models/movie.model';

@Pipe({
  name: "completeness",
  pure: false
})

export class CompletenessPipe implements PipeTransform {
  transform(input: Movie[]) {
    let output = {};
    let actionMovies: Movie[] = [];
    let comedyMovies: Movie[] = [];
    if (input[0].genre[0] != 'woof') {
      actionMovies.push(input[0]);
      actionMovies.push(input[1]);
      comedyMovies.push(input[2]);
      output['Action'] = actionMovies;
      output['Comedy'] = comedyMovies;
      console.log(output);
    }
    // output["second"] = 'F';
    return output;
    // let movieGenre: object[] = []; //make this a dictionary and push arrays to it?
    // let actionMovies: Movie[] =  [];
    // let thrillerMovies: Movie[] =  [];
    // let fantasyMovies: Movie[] =  [];
    // let dramaMovies: Movie[] =  [];
    // let comedyMovies: Movie[] =  [];
    // let romanceMovies: Movie[] =  [];

    // for (let i = 0; i< input.length; i++) {
    //   for (let j = 0; j<input.genre.length; j++) {
    //     if (input[i].genre[j] === "Action") {
    //       actionMovies.push(input[i]);
    //     } else if (input[i].genre[j] === "Thriller") {
    //       thrillerMovies.push(input[i]);
    //     }  else if (input[i].genre[j] === "Fantasy") {
    //       fantasyMovies.push(input[i]);
    //     } else if (input[i].genre[j] === "Drama") {
    //       dramaMovies.push(input[i]);
    //     } else if (input[i].genre[j] === "Comedy") {
    //       comedyMovies.push(input[i]);
    //     } else if (input[i].genre[j] === "Romance") {
    //       romanceMovies.push(input[i]);
    //     }
    //   }
    // }
    // movieGenre.push(actionMovies);
    // movieGenre.push(thrillerMovies);
    // movieGenre.push(fantasyMovies);
    // movieGenre.push(dramaMovies);
    // movieGenre.push(comedyMovies);
    // movieGenre.push(romanceMovies);
    // return movieGenre;
  }
}
