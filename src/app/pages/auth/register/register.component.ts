import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../login/login.component.css']
})
export class RegisterComponent  {

  user = {
    name: '',
    email: '',
    password: '',
    confirmPassword : '',
  };

  onSubmit() {
    console.log('Registration submitted:', this.user);
    // Goi API
  }

}
