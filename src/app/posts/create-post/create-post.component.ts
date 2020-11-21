import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Post} from '../post.model';
import { PostService } from '../post.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {
  enteredTitle = '';
  enteredContent ='';
  constructor(public postsService : PostService) {
  }

  onAddPost(form: NgForm){
    if (form.invalid){
      return;
    }
    this.postsService.addPost(form.value.title, form.value.content);
  };
  ngOnInit(): void {
  }

}
