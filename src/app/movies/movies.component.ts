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

  addToList($event:any,movie:Movie){
    console.log("butona basıldı",movie.title); 
    console.log($event.target.classList);
    if($event.target.classList.contains('btn-dark')){
      $event.target.innerText="Remove List"
      $event.target.classList.remove('btn-dark')
      $event.target.classList.add('btn-danger');
    }else{
      $event.target.innerText="Add List"
      $event.target.classList.remove('btn-danger')
      $event.target.classList.add('btn-dark')
    }
    
  }

  // movies=["Film 1 ","Film 2","Film 3","Film 4"]
 


}
