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
  movieRepository:MovieRepository;
  filteredMovies:Movie[];
  filterText:string=""


  constructor() {
    this.movieRepository=new MovieRepository();
    this.movies=this.movieRepository.getMovies();
    this.filteredMovies=this.movies;
   }

  ngOnInit(): void {
  }

  onInputChange(){
    console.log("onInputChange",this.filterText);
    this.filteredMovies=this.filterText?
    this.movies.filter
    (m=>m.title.toLowerCase().indexOf(this.filterText)!==-1 || 
        m.description.toLowerCase().indexOf(this.filterText)!==-1) : this.movies
  }

  // movies=["Film 1 ","Film 2","Film 3","Film 4"]
 


}
