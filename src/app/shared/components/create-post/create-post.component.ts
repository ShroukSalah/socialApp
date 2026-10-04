import { AfterViewInit, Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { initFlowbite } from 'flowbite';
import { PostsService } from '../../../core/services/posts/posts.service';

@Component({
  selector: 'app-create-post',
  imports: [ReactiveFormsModule],
  templateUrl: './create-post.component.html',
  styleUrl: './create-post.component.css',
})
export class CreatePostComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    initFlowbite();
  }



  private readonly postsService = inject(PostsService)
  postControl: FormControl = new FormControl("", [Validators.required])
  uploadedFile!: File;


  // upload file
  uploadFile(e: Event): void {
    const file = e.target as HTMLInputElement
    if (file.files) {
      this.uploadedFile = file.files[0]
    }
  }


  // submit function
  onSubmitForm(e: SubmitEvent): void {
    e.preventDefault()
    // prepare formdata
    const formData: FormData = new FormData()
    formData.append("body", this.postControl.value)
    formData.append("image", this.uploadedFile)
    // Call Api
    this.postsService.createPosts(formData).subscribe({
      next: (res) => {
        console.log(res.data)
      }
    })

  }

}
