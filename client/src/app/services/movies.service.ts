import { Injectable } from '@angular/core';
import {MovieI} from '../models/movie.interface';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {Observable} from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  
  apiURL:string = environment.movieApiUrl;
  apiKey:string = environment.movieApiKey;

  constructor(private http:HttpClient) { }

  getPopularMovies():any{
    let address = this.getAddress('/movie/popular');
    return this.http.get(address);
  }

  getMovieDetails(movie_id):any{
    let address = this.getAddress("/movie/" + movie_id );
    return this.http.get(address);
  }

  getSimilarMovies(movie_id):any{
    let address = this.getAddress("/movie/" + movie_id + "/similar");
    return this.http.get(address);
  }
  getActorsMovie(movie_id):any{
    let address= this.getAddress("/movie/"+ movie_id+ "/credits");
    return this.http.get(address);
  }

  getAddress(path):string{
    return this.apiURL + path + "?api_key=" + this.apiKey + "&language=es";
  }
}
