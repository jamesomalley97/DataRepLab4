import { Component, OnInit } from '@angular/core';
import { ServicesMovieServiceService } from '../services-movie-service.service';


@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

   MyMovies: any = [];

   constructor(private movieService: ServicesMovieServiceService) {
   }

   ngOnInit(){
     this.movieService.GetMovieInformation().subscribe((data) => {
       this.MyMovies = data.Search;
       console.log(this.MyMovies);
     })

 
   }
 }