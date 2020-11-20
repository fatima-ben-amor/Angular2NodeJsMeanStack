import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {
  enteredTitle = '';
  enteredContent ='';
  @Output() postCreated = new EventEmitter();
  constructor() { }
  onAddPost(){
    const post ={title:this.enteredTitle,
                content:this.enteredContent};+
    this.postCreated.emit(post);

    };
  ngOnInit(): void {
  }

}
