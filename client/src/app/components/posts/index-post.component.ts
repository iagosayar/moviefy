import { Component, ContentChildren, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { Router } from '@angular/router';
import { PostI } from '../../models/post.interface';

@Component({
  selector: 'app-posts',
  templateUrl: './index-post.component.html',
  styleUrls: ['./index-post.component.css']
})
export class IndexPostComponent implements OnInit {

  posts:PostI[] = []
  
  constructor(
    public postService: PostsService,
    private router: Router
  ) { } 

  ngOnInit(): void {
    this.postService.getAll().subscribe(data => {
      this.posts = data["posts"];
    })
  }

  deletePost(id:number){
    this.postService.delete(id).subscribe(res => {
         this.posts = this.posts.filter(item => item._id !== id);
         console.log('Post deleted successfully!');
    })
  }
}