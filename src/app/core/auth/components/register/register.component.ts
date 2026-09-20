import { HttpErrorResponse } from '@angular/common/http';
import { AuthService } from './../../services/auth.service';
import { Component, inject } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {

  private readonly authService = inject(AuthService)
  errorMessage: string = ""
  registerForm: FormGroup = new FormGroup({
    name: new FormControl("", [Validators.required, Validators.minLength(3)]),
    username: new FormControl(""),
    email: new FormControl("", [Validators.required, Validators.email]),
    dateOfBirth: new FormControl("", [Validators.required,]),
    gender: new FormControl("", [Validators.required, Validators.minLength(3)]),
    password: new FormControl("", [Validators.required, Validators.minLength(5), Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/)]),
    rePassword: new FormControl("", [Validators.required, Validators.minLength(5)])
  }, { validators: [this.handleConfirmPassword] })

  onSubmit() {
    console.log(this.registerForm.value)
    this.authService.sendRegisterData(this.registerForm.value).subscribe({
      next: (res) => {
        console.log(res)
        this.registerForm.reset()
      },
      error: (err: HttpErrorResponse) => {
        console.log(err.error.message)
        this.errorMessage = err.error.message
      }
    })
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

