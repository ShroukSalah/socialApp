import { Component, Input } from '@angular/core';
import { Post } from '../../../core/models/posts.interface';

@Component({
  selector: 'app-single-post',
  imports: [],
  templateUrl: './single-post.component.html',
  styleUrl: './single-post.component.css',
})
export class SinglePostComponent {
  @Input({ required: true }) postData: Post = {} as Post

}
