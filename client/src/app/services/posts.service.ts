import { Injectable } from '@angular/core';
import {PostI} from '../models/post.interface';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  
  apiURL:string = environment.myApiUrl;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<any> {
    return this.httpClient.get(this.apiURL + '/posts/')

    .pipe(
      catchError(this.errorHandler)
    )
  }
  
  find(id:number): any {
    return this.httpClient.get(this.apiURL + '/post/' + id)
  
    .pipe(
      catchError(this.errorHandler)
    )
  }  

  create(post:PostI): Observable<any> {

    return this.httpClient.post(this.apiURL + '/post/', JSON.stringify(post), this.httpOptions)
  
    .pipe(
      catchError(this.errorHandler)
    )
  }

  update(id:number, post:PostI): Observable<any> {
  
    return this.httpClient.put(this.apiURL + '/post/' + id, JSON.stringify(post), this.httpOptions)
 
    .pipe( 
      catchError(this.errorHandler)
    )
  }
  
  delete(id:number){
    return this.httpClient.delete(this.apiURL + '/post/' + id, this.httpOptions)
  
    .pipe(
      catchError(this.errorHandler)
    )
  }  

  errorHandler(error:any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
 }

}
