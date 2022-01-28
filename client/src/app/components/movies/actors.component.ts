import { Component, OnInit,Input } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.css']
})
export class ActorsComponent implements OnInit {

  @Input() movieId!: number; 
  actorsMovie:any = [];

  constructor( private movieService:MoviesService) { }

  ngOnInit(): void {
    this.movieService.getActorsMovie(this.movieId).subscribe(data => {
      this.actorsMovie = data["cast"].slice(0, 10);
   }) 
 }
}
