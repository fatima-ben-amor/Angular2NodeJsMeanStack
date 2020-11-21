import { Post } from './post.model';
import {Injectable} from '@angular/core'
import {Subject} from 'rxjs'
@Injectable ({providedIn: 'root'})
export class PostService{
  private postsUpdated = new Subject<Post[]>();
  private posts: Post[] = []; //Post is a model

  getPosts(){
    return [...this.posts];
  }
getPostUpdateListener(){
  return this.postsUpdated.asObservable();
}

  addPost(title : string , content: string){
    const post : Post={title : title , content: content};
    this.posts.push(post);
    this.postsUpdated.next([...this.posts]);
  }
}
