import { Component, inject, Input, OnInit, signal } from '@angular/core';
import { CreateCommentComponent } from '../create-comment/create-comment.component';
import { CommentsService } from '../../../core/services/comments/comments.service';
import { Comment } from '../../../core/models/comments.interface';

@Component({
  selector: 'app-comments',
  imports: [CreateCommentComponent],
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.css',
})
export class CommentsComponent implements OnInit {
  @Input({ required: true }) postId!: string
  private readonly commentsService = inject(CommentsService)
  commentsList = signal<Comment[]>([]);
  ngOnInit(): void {
 
this.commentsService.getPostComments(this.postId).subscribe({
  next:(res)=>{
    console.log(res.data.comments)
    this.commentsList.set(res.data.comments)
  }
})
  }
}
