import { Component, EventEmitter, inject, Input, OnInit, Output, signal } from '@angular/core';
import { Post } from '../../../core/models/posts.interface';
import { CommentsComponent } from '../comments/comments.component';
import { CreateCommentComponent } from '../create-comment/create-comment.component';
import { RouterLink } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { PostsService } from '../../../core/services/posts/posts.service';
import { AuthService } from '../../../core/auth/services/auth.service';

@Component({
  selector: 'app-single-post',
  imports: [CommentsComponent, CreateCommentComponent, RouterLink],
  templateUrl: './single-post.component.html',
  styleUrl: './single-post.component.css',
})
export class SinglePostComponent implements OnInit {
  @Input({ required: true }) postData: Post = {} as Post
  @Output() postDeleted = new EventEmitter<string>();

  private readonly postsService = inject(PostsService)
  private readonly authService = inject(AuthService)

  pofileId = signal<string>('')
  isLiked = signal<boolean>(false);
  likesCount = signal<number>(0);

  ngOnInit(): void {
    this.likesCount.set(this.postData.likesCount);

    // this.authService.getProfile().subscribe({
    //   next: (res) => {
    //     this.pofileId.set(res.data.user._id)
    //     setTimeout(() => initFlowbite(), 0);
    //   }
    // })
  }


  deletePost(): void {
    this.postsService.DeletePost(this.postData._id).subscribe({
      next: () => {
        this.postDeleted.emit(this.postData._id)
      }
    })
  }

  likePost(): void {
    const wasLiked = this.isLiked();
    this.isLiked.set(!wasLiked);
    this.likesCount.update(c => wasLiked ? c - 1 : c + 1);

    this.postsService.likePost(this.postData._id).subscribe({
      error: () => {
         this.isLiked.set(wasLiked);
        this.likesCount.update(c => wasLiked ? c + 1 : c - 1);
      },
    });
  }
}
