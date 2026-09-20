import { HttpErrorResponse } from '@angular/common/http';
import { AuthService } from './../../services/auth.service';
import { Component, inject } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {

  private readonly authService = inject(AuthService)
  private readonly router = inject(Router)
  private readonly fb = inject(FormBuilder)


  errorMessage: string = ""
  isloading: boolean = false


  registerForm: FormGroup = this.fb.group({
    name: ["", [Validators.required, Validators.minLength(3)]],
    username: [""],
    email: ["", [Validators.required, Validators.email]],
    dateOfBirth: ["", [Validators.required,]],
    gender: ["", [Validators.required, Validators.minLength(3)]],
    password: ["", [Validators.required, Validators.minLength(5), Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/)]],
    rePassword: ["", [Validators.required, Validators.minLength(5)]],
  }, { validators: [this.handleConfirmPassword] })

  onSubmit() {
    this.isloading = true
    if (this.registerForm.valid) {
      this.authService.sendRegisterData(this.registerForm.value).subscribe({

        next: (res) => {
          console.log(res)
          this.registerForm.reset()
          this.isloading = false
          this.router.navigate(['/login'])
        },
        error: (err: HttpErrorResponse) => {
          console.log(err.error.message)
          this.isloading = false
          this.errorMessage = err.error.message
        }
      })
    }
    else {
      this.registerForm.markAllAsTouched()
    }


  }


  handleConfirmPassword(group: AbstractControl) {
    const password = group.get("password")?.value
    const rePassword = group.get("rePassword")?.value
    if (password !== rePassword && rePassword !== "") {
      group.get('rePassword')?.setErrors({ mismatch: true })
      return { mismatch: true }
    }
    else {
      return null
    }
  }
}

