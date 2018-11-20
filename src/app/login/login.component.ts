import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  submitted = false;
  invalidLogin = false;
  loginForm: FormGroup;

  constructor(private router: Router, private authService: AuthenticationService, private formBuilder: FormBuilder) {}

  submit() {
    this.submitted = true;
    if (this.loginForm.invalid) {  return; }
    if (this.loginForm.controls.email.value === 'admin@xxx.com' && this.loginForm.controls.password.value === 'admin') {
        this.router.navigate(['list-account']);
        this.authService.saveCredentials(this.loginForm.value);
    } else {
      this.invalidLogin = true;
    }
  }
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

}
