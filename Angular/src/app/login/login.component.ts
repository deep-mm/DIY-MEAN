import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./bootstrap.min.css']
})
export class LoginComponent implements OnInit {

  submitted = false;
  userModel2 = {name: ' ', email: '', phone: '', password: ''};

  constructor() { }

  onSubmit() {
    this.submitted = true;

  }
  ngOnInit() {
  }

}
