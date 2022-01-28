import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './templates/header/header.component';
import { FooterComponent } from './templates/footer/footer.component';
import { PopularMovieComponent } from './components/movies/popular.component';
import { ViewMovieComponent } from './components/movies/view.component';
import { SimilarMoviesComponent } from './components/movies/similar.component';
import { IndexPostComponent } from './components/posts/index-post.component';
import { EditPostComponent } from './components/posts/edit-post.component';
import { NewPostComponent } from './components/posts/new-post.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActorsComponent } from './components/movies/actors.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PopularMovieComponent,
    ViewMovieComponent,
    ActorsComponent, 
    SimilarMoviesComponent,
    IndexPostComponent, 
    EditPostComponent, 
    NewPostComponent   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }