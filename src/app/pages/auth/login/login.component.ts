import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// import { }
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }

    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;

    // Gọi hàm xử lý đăng nhập, ví dụ:
    this.login(email, password);
  }

  login(email: string, password: string) {
    // Gửi yêu cầu đăng nhập đến server thông qua API
    // Xử lý kết quả từ server
    // Lưu thông tin người dùng đã đăng nhập vào local storage hoặc session storage
    // Điều hướng sau khi đăng nhập thành công
  }

}
