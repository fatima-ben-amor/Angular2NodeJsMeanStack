import { Component,  OnDestroy,  OnInit } from '@angular/core';
import { from } from 'rxjs';
import {Post } from '../../post.model';
import { PostService } from '../../post.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit , OnDestroy{
 /*posts = [
  {title: "First post" , content: "this the first content"},
  {title: "second post" ,content: "this the second content"},
  {title: "third post" , content: "this the third content"},
  ]
*/
posts : Post[]=[];
private postsSub : Subscription;

  constructor(public postsService : PostService) {
  }
  ngOnInit(): void {
    //now we fetch all the post
   this.posts=this.postsService.getPosts();
   this.postsSub =  this.postsService.getPostUpdateListener()
    .subscribe((posts : Post[])=>{
      this.posts = posts;
    });
  }
 ngOnDestroy(){
   this.postsSub.unsubscribe();
 }
}
