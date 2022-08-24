import { Movie } from "./movie";

export class MovieRepository{
    private movies:Movie[]

    constructor(){
        this.movies=[
            {
              id:1,
              title:"Film 1",
              description:"Film 1 desc",
              imageUrl:"1.jpeg"
            },
            {
              id:2,
              title:"Film 2",
              description:"Film 2 desc",
              imageUrl:"2.jpeg"
            },
            {
              id:3,
              title:"Film 3",
              description:"Film 3 desc",
              imageUrl:"3.jpeg"
            },
            {
              id:4,
              title:"Film 4",
              description:"Film 4 desc",
              imageUrl:"4.jpeg"
            },
          ];
    }

    getMovies(): Movie[]{
        return this.movies;
    }

    getMovieById(id:number):Movie {
        return this.movies.find(i=>i.id==id);
    }
}