import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  'userName': string;
  'password': string;
  'loginError': boolean;
  'cadastrando': boolean;

  constructor(
    private router: Router
  ) { }

  onSubmit(){
    this.router.navigate(['/home']);
    //console.log(`UserName.: ${this.userName}, Password.: ${this.password}`);
  }

  preparaCadastro(){
    this.cadastrando = true;
  }

  cancelaCadastro(){
    this.cadastrando = false;
  }

}
