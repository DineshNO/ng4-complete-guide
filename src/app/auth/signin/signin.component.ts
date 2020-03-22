import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Authservice } from '../auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private authService :Authservice) { }

  ngOnInit() {
  }


  onSignin(form : NgForm){
    const email = form.value.email;
    const password = form.value.password;
    this.authService.signinUser(email,password);
  }
}
