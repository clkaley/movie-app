import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // movies=["Film 1 ","Film 2","Film 3","Film 4"]
  movies=[
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
  ]

}
