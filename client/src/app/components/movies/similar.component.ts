import { Component, OnInit, Input } from '@angular/core';
import {MoviesService} from '../../services/movies.service';
import { Router } from '@angular/router';
import { MovieI } from '../../models/movie.interface';

@Component({
  selector: 'app-similar-movies',
  templateUrl: './similar.component.html',
  styleUrls: ['./similar.component.css']
})
export class SimilarMoviesComponent implements OnInit {

  @Input() movieId!: number; 
  similarMovies:any = []
  
  constructor(private movieService: MoviesService) { }

  // Se ejecuta cuanto se crea el compoment
  ngOnInit(): void {
     this.movieService.getSimilarMovies(this.movieId).subscribe(data => {
      this.similarMovies = data["results"];
    }) 
  }
}