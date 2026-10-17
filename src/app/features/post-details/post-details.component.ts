import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../../core/services/posts/posts.service';
import { PostDetails } from '../../core/models/post-details.interface';
import { CommentsComponent } from '../../shared/components/comments/comments.component';
import { CreateCommentComponent } from '../../shared/components/create-comment/create-comment.component';

@Component({
  selector: 'app-post-details',
  imports: [CommentsComponent, CreateCommentComponent],
  templateUrl: './post-details.component.html',
  styleUrl: './post-details.component.css',
})
export class PostDetailsComponent implements OnInit {
  private readonly activatedRoute = inject(ActivatedRoute)
  private readonly postsService = inject(PostsService)

  postId!: string | null
  postDetails = signal<PostDetails | null>(null);
  ngOnInit(): void {
    this.getPostId()
    this.getPostDetails()
    console.log(this.postDetails)
  }


  getPostId(): void {
    this.activatedRoute.paramMap.subscribe({
      next: (Url) => {
        console.log(Url.get('id'))
        this.postId = Url.get('id')
      }
    })
  }
  getPostDetails(): void {
    this.postsService.getSinglePost(this.postId).subscribe({
      next: (res) => {
        this.postDetails.set(res.data.post)
        console.log(this.postDetails())

      }
    })
  }
}
