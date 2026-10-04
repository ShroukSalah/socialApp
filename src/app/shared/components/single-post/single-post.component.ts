import { Component, Inject, Input } from '@angular/core';
import { Post } from '../../../core/models/posts.interface';
import { CommentsComponent } from '../comments/comments.component';
import { CreateCommentComponent } from '../create-comment/create-comment.component';
 
@Component({
  selector: 'app-single-post',
  imports: [CommentsComponent, CreateCommentComponent],
  templateUrl: './single-post.component.html',
  styleUrl: './single-post.component.css',
})
export class SinglePostComponent {
  @Input({ required: true }) postData: Post = {} as Post
 
    

}
