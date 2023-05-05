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

  constructor(public appService: AppService){
    this.username = "";
    this.password = "";
  }
  
  handleRegister(){
    const userInfo: UserInfo = {username: this.username, password: this.password};
    this.appService.postRegister(userInfo).subscribe(response => { console.log(response); });
  }

  handleLogin(){
    const userInfo: UserInfo = {username: this.username, password: this.password};
    this.appService.postLogin(userInfo).subscribe(response => { console.log(response); });
  }
}
