import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  errorMsg!: String;
  registerForm ! :FormGroup;
  username: string = '';
  password: string = '';
constructor(private authService: AuthService, private router: Router, private fb: FormBuilder){ }

ngOnInit(): void {
  this.registerForm = this.fb.group({
    name: ['', Validators.required],
    username: ['', Validators.required],
    password: ['', [Validators.required, Validators.minLength(6)]]

  })
}
get registerFormControl() {
  return this.registerForm.controls;
}
register(){
  if (this.registerForm.invalid) {
    // Form is invalid, do not proceed with submission
    return;
  }

  // Form is valid, proceed with registration
  const name = this.registerFormControl['name'].value;
  const username = this.registerFormControl['username'].value;
  const password = this.registerFormControl['password'].value;

    if(this.authService.register(username, password)){
      console.log("registration successfull")
      this.router.navigate(['/login'])
    }
    else{
       console.log("Registration failed")
         }
}
}