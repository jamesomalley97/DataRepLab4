import { Component, OnInit } from '@angular/core';
import { ServicesMovieServiceService } from './services-movie-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'movie-app';
  MyMovies: any = [];

  constructor(private movieService: ServicesMovieServiceService) {
    this.movieService.GetMovieInformation().subscribe((data) => {
      this.MyMovies = data.Search;
      console.log(this.MyMovies);
    })


  }
}
