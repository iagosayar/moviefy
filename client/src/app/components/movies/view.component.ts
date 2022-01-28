import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {MoviesService} from '../../services/movies.service';

@Component({
  selector: 'app-details',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewMovieComponent implements OnInit {

  movie:any = {}
  id!: number;
  veganValue:boolean = false;

  constructor(
    private movieService: MoviesService, 
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.movieService.getMovieDetails(this.id).subscribe(data => {
      this.movie = data;
    })
  }

}