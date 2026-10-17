import { AfterViewInit, Component, Inject, Input } from '@angular/core';
import { Post } from '../../../core/models/posts.interface';
import { CommentsComponent } from '../comments/comments.component';
import { CreateCommentComponent } from '../create-comment/create-comment.component';
import { RouterLink } from '@angular/router';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-single-post',
  imports: [CommentsComponent, CreateCommentComponent, RouterLink],
  templateUrl: './single-post.component.html',
  styleUrl: './single-post.component.css',
})
export class SinglePostComponent implements AfterViewInit{
  @Input({ required: true }) postData: Post = {} as Post
  ngAfterViewInit(): void {
    initFlowbite();
  }


}
