import { HttpErrorResponse } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  private readonly authService = inject(AuthService)
  private readonly router = inject(Router)
  private readonly fb = inject(FormBuilder)


  errorMessage: string = ""
  isloading: boolean = false


  // loginForm: FormGroup = new FormGroup({
  //   email: new FormControl("", [Validators.required, Validators.email]),
  //   password: new FormControl("", [Validators.required, Validators.minLength(5), Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/)]),
  // })
  loginForm: FormGroup = this.fb.group({
    email:["", [Validators.required, Validators.email]],
    password:  ["", [Validators.required, Validators.minLength(5), Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/)]],
  })


  onSubmit() {
    this.isloading = true
    this.authService.sendLoginData(this.loginForm.value).subscribe({
      next: (res) => {
        console.log(res)
        this.loginForm.reset()
        this.isloading = false
        this.router.navigate(['/feed'])
      },
      error: (err: HttpErrorResponse) => {
        console.log(err.error.message)
        this.isloading = false
        this.errorMessage = err.error.message
      }
    })
  }



}
