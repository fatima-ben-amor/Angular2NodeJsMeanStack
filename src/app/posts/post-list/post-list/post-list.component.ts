import { Component, Input, OnInit } from '@angular/core';
import {Post } from '../../post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

@Input() posts : Post[] = [/*
  {title: "First post" , content: "this the first content"},
  {title: "second post" ,content: "this the second content"},
  {title: "third post" , content: "this the third content"},
*/
]
  constructor() { }

  ngOnInit(): void {
  }

}
