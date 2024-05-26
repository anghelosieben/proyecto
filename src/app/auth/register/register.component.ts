import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit{
  formRegister !: FormGroup;
  constructor(private authService:AuthServiceService, private router:Router){}
  ngOnInit() {
      this.formRegister = new FormGroup({
        name: new FormControl('', Validators.required),
        email: new FormControl('', Validators.required),
        password: new FormControl('', Validators.required),
        password_confirmation: new FormControl('', Validators.required)
      });
  }
  get form(){
    return this.formRegister.controls;
  }
  registerUser(){
    if(this.formRegister.valid){
      this.authService.registerUser(this.formRegister.value).
      subscribe((res: any) => {
        if(res.token){
          localStorage.setItem('token', res.token);
          this.router.navigate(['/dashboard']);
          }
        });
      }
    }
}
