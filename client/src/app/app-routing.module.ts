import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PopularMovieComponent } from './components/movies/popular.component';
import { ViewMovieComponent } from './components/movies/view.component';
import { IndexPostComponent } from './components/posts/index-post.component';
import { EditPostComponent } from './components/posts/edit-post.component';
import { NewPostComponent } from './components/posts/new-post.component';

const routes: Routes = [
  { path: '', redirectTo:'popular', pathMatch:'full' },
  { path: 'popular', component: PopularMovieComponent },
  { path: 'movie/:id', component: ViewMovieComponent },
  { path: 'posts', component: IndexPostComponent },
  { path: 'post/new', component: NewPostComponent },
  { path: 'post/:postId/edit', component: EditPostComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
