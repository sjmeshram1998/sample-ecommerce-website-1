import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private users = [
    { id: 1, username: "user1@gmail.com", password: "password1" },
    { id: 2, username: "user2@gmail.com", password: "password2" }
  ];
private url = "http://localhost:3000/users" 
  constructor(private http: HttpClient) { }


  
  logIn(username: string, password: string): boolean{
    const user = this.users.find(u=> u.username===username && u.password===password);

    if(user){
      localStorage.setItem('currentUser', JSON.stringify(user))
      return true;
    }
    return false;
  }

  register(username: string, password: string): boolean{
    const userExists = this.users.some(user=>user.username === username);
    if(userExists){

      return false;
    }
    const id = this.users.length+1;
    this.users.push({id, username, password})
    return true;
  }

  logout(){
    localStorage.removeItem('currentUser')
  }
  isLoggedIn():boolean{
    return localStorage.getItem('currentUser') === 'true';   
}
}