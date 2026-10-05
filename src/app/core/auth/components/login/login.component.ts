import { HttpErrorResponse } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  private readonly authService = inject(AuthService)
  private readonly router = inject(Router)
  private readonly fb = inject(FormBuilder)
  loginForm!: FormGroup

  errorMessage: string = ""
  isloading: boolean = false
  flag: boolean = true
  sub$: Subscription = new Subscription
  // loginForm: FormGroup = new FormGroup({
  //   email: new FormControl("", [Validators.required, Validators.email]),
  //   password: new FormControl("", [Validators.required, Validators.minLength(5), Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/)]),
  // })
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(5), Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/)]],
    })
  }



  onSubmit() {
    this.sub$.unsubscribe()
    this.isloading = true
    this.sub$ = this.authService.sendLoginData(this.loginForm.value).subscribe({
      next: (res) => {
        console.log(res)
        this.loginForm.reset()
        this.isloading = false
        this.router.navigate(['/feed'])
        localStorage.setItem('userToken', res.data.token)
      },
      error: (err: HttpErrorResponse) => {
        console.log(err.error.message)
        this.isloading = false
        this.errorMessage = err.error.message
      }
    })
  }

  showPass(): void {
    this.flag = !this.flag
  }
}
