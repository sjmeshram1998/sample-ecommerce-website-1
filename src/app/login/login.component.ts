import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators} from '@angular/forms'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit{
  credentials = {
     username: '',
     password: ''
  };
  errorMsg!: String;
  loginForm! : FormGroup;
  // username: string = '';
  // password: string = '';
constructor(private authService: AuthService, private router: Router, private fb: FormBuilder){}
ngOnInit(): void {
  this.loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  })
 
}
get loginFormControl() {
  return this.loginForm.controls;
}


  

  login(){
    if (this.loginForm.invalid) {
      // Form is invalid, do not proceed with submission
      this.errorMsg= "Please provide both username and password."
      return;
    }

    // Form is valid, proceed with login
    const username = this.loginFormControl['username'].value;
    const password = this.loginFormControl['password'].value;
   if( this.authService.logIn(username, password)){
    this.router.navigate(['/home']);
    // this.router.navigateByUrl(['/home']);
    console.log("login successful");
   }
   else{
    console.log("register first");
   }
  }
}
