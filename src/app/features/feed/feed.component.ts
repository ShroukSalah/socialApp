import { PostsService } from './../../core/services/posts/posts.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';
import { Subscription } from 'rxjs';
import { CreatePostComponent } from '../../shared/components/create-post/create-post.component';
import { SinglePostComponent } from '../../shared/components/single-post/single-post.component';
import { Post } from '../../core/models/posts.interface';

@Component({
  selector: 'app-feed',
  imports: [CreatePostComponent, SinglePostComponent],
  templateUrl: './feed.component.html',
  styleUrl: './feed.component.css',
})
export class FeedComponent implements OnInit {
  private readonly postsService = inject(PostsService)

  sub$: Subscription = new Subscription
  postsList = signal<Post[]>([]);


  ngOnInit(): void {
    this.sub$ = this.postsService.getAllPosts().subscribe({
      next: (res) => { 
        console.log(res.data.posts)
        this.postsList.set(res.data.posts) },
      error: (err: HttpErrorResponse) => console.log(err.error.message),
    });
  }


}
