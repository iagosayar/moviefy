import { Component, OnInit } from '@angular/core';
import {MoviesService} from '../../services/movies.service';
import { Router } from '@angular/router';
import { MovieI } from '../../models/movie.interface';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
export class PopularMovieComponent implements OnInit {

  movies:any = []
  
  constructor(private movieService: MoviesService, private router: Router) { }

  // Se ejecuta cuanto se crea el compoment
  ngOnInit(): void {
    this.movieService.getPopularMovies().subscribe(data => {
      this.movies = data["results"];
    })
  }

  viewMovie(id){
    this.router.navigate(['/movie', id ]);
  }

}
