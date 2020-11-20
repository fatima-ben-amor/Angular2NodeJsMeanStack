import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { CreatePostComponent } from './posts/create-post/create-post.component';
import { from } from 'rxjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule } from '@angular/material/input' ;
import {MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { HeaderComponent } from './header/header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { PostListComponent } from './posts/post-list/post-list/post-list.component';
import {MatExpansionModule} from '@angular/material/expansion';




@NgModule({
  declarations: [
    AppComponent,
    CreatePostComponent,
    HeaderComponent,
    PostListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
