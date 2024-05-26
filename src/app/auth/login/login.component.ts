import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthServiceService } from '../auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ ReactiveFormsModule ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  formLogin!:FormGroup;
  constructor(public authService: AuthServiceService, private router: Router){

  }
  ngOnInit() {
    this.formLogin = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  loginUser(){    
      this.authService.loginUser(this.formLogin.value.email, this.formLogin.value.password)
      .subscribe((res: any) => {
        console.log(res);        
          localStorage.setItem('token', res.token);
          this.router.navigate(['/pokemon/search']);  
      });
      if(this.formLogin.valid){
        console.log("hello");
      }
  }
  logoutUser() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
  get form(){
    return this.formLogin.controls;
  }
}
