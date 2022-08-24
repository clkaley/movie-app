import { Movie } from "./movie";
//! metod tanımlama vb işler için yapılır
export class MovieRepository{
    //!private üye tanımlanıyor sadece sınıftan ulaşılsın
    private movies:Movie[]

    //!bilgi akatarımı yapıyoruz burda da
    constructor(){
        this.movies=[
            {
              id:1,
              title:"Film 1",
              description:"Film 1 desc",
              imageUrl:"1.jpeg",
              isPopular:false,
            },
            {
              id:2,
              title:"Film 2",
              description:"Film 2 desc",
              imageUrl:"2.jpeg",
              isPopular:true,
            },
            {
              id:3,
              title:"Film 3",
              description:"Film 3 desc",
              imageUrl:"3.jpeg",
              isPopular:true,
            },
            {
              id:4,
              title:"Film 4",
              description:"Film 4 desc",
              imageUrl:"4.jpeg",
              isPopular:false,
            },
          ];
    }

    //! burda da metotlar oluşturuldu.
    getMovies(): Movie[]{
        return this.movies;
    }

    getPopularMovies():Movie[]{
      return this.movies.filter(i=>i.isPopular);
    }

    getMovieById(id:number):Movie {
        return this.movies.find(i=>i.id==id);
    }

   
}