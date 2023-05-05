import { Component } from '@angular/core';
import { AppService } from '../app.service';
import { UserInfo } from './userInfo';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string;
  password: string;
  usernameToDisplay: string;
  loggedIn: boolean;

  constructor(public appService: AppService){
    this.username = "";
    this.password = "";
    this.usernameToDisplay = "";
    this.loggedIn = false;
  }
  
  handleRegister(){
    const userInfo: UserInfo = {username: this.username, password: this.password};
    this.appService.postRegister(userInfo).subscribe(response => { 
      console.log(response);
      if(response.message === "success")
      {
        alert("Registered and logged in as " + this.username + "!");
        this.usernameToDisplay = response.data.username[0];
        this.loggedIn = true;
      }
      else 
      {
        alert("Failed to register.");
      }
     });
  }

  handleLogin(){
    const userInfo: UserInfo = {username: this.username, password: this.password};
    this.appService.postLogin(userInfo).subscribe(response => { 
      if(response.message === "success")
      {
        alert("Logged in as " + this.username + "!");
        this.usernameToDisplay = response.data.username[0];
        this.loggedIn = true;
      }
      else 
      {
        alert("Invalid username or password.");
      }
     });
  }
}
