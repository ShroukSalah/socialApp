import { Component, inject, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommentsService } from '../../../core/services/comments/comments.service';

@Component({
  selector: 'app-create-comment',
  imports: [ReactiveFormsModule],
  templateUrl: './create-comment.component.html',
  styleUrl: './create-comment.component.css',
})
export class CreateCommentComponent {
  private readonly commentsService = inject(CommentsService)
  @Input({ required: true }) postId!: string

  newCommentControl: FormControl = new FormControl("", [Validators.required])

  onSubmitForm(e: SubmitEvent): void {
    e.preventDefault()
    const formData: FormData = new FormData()

    formData.append("content", this.newCommentControl.value)

 
    this.commentsService.createComment(this.postId, formData).subscribe({
      next: (res) => {
         this.newCommentControl.reset()
       },
    })
  }
}
