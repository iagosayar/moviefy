import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PostI } from '../../models/post.interface';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {
  

  form!: FormGroup;

  constructor(
    public postService: PostsService,
    private router: Router
  ) { } 

  ngOnInit(): void {
    this.form = new FormGroup({
      heading: new FormControl('', [Validators.required]),
      content: new FormControl('', Validators.required)
    });
  }

  get f(){
    return this.form.controls;
  }

  submit(){
    this.postService.create(this.form.value).subscribe((res:any) => {
         console.log('Post created successfully!');
         this.router.navigateByUrl('posts');
    })
  }

}
