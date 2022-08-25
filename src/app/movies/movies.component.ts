import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movie';
import { MovieRepository } from '../models/movie.repository';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  title="hello title";
  movies:Movie[];
  popularMovies:Movie[];
  today=new Date();
  movieRepository:MovieRepository;
  constructor() {
    this.movieRepository=new MovieRepository();
    this.movies=this.movieRepository.getMovies();
    this.popularMovies=this.movieRepository.getPopularMovies();
   }

  ngOnInit(): void {
  }

  // movies=["Film 1 ","Film 2","Film 3","Film 4"]
 


}
