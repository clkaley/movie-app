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
              description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis dolorum eaque consequuntur laudantium magnam, esse sed placeat. Perspiciatis, reiciendis aperiam nostrum quod, deleniti in quos voluptates vel, mollitia voluptatibus ipsa.",
              imageUrl:"1.jpeg",
              isPopular:false,
              datePublished:new Date(1990,10,10),
            },
            {
              id:2,
              title:"Film 2",
              description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis dolorum eaque consequuntur laudantium magnam, esse sed placeat. Perspiciatis, reiciendis aperiam nostrum quod, deleniti in quos voluptates vel, mollitia voluptatibus ipsa.",
              imageUrl:"2.jpeg",
              isPopular:true,
              datePublished:new Date(1990,10,10),
            },
            {
              id:3,
              title:"Film 3",
              description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis dolorum eaque consequuntur laudantium magnam, esse sed placeat. Perspiciatis, reiciendis aperiam nostrum quod, deleniti in quos voluptates vel, mollitia voluptatibus ipsa.",
              imageUrl:"3.jpeg",
              isPopular:true,
              datePublished:new Date(1990,10,10),
            },
            {
              id:4,
              title:"Film 4",
              description:"Film 4 desc",
              imageUrl:"4.jpeg",
              isPopular:false,
              datePublished:new Date(1990,10,10),
            },
            {
              id:5,
              title:"Film 5",
              description:"Film 5 desc",
              imageUrl:"5.jpeg",
              isPopular:false,
              datePublished:new Date(1990,10,10),
            },
            {
              id:6,
              title:"Film 6",
              description:"Film 6 desc",
              imageUrl:"1.jpeg",
              isPopular:false,
              datePublished:new Date(1990,10,10),
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