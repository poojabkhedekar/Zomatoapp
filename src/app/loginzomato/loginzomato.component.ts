import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-loginzomato',
  templateUrl: './loginzomato.component.html',
  styleUrls: ['./loginzomato.component.scss'],
})
export class LoginzomatoComponent {
  show: any = false;
  hide: any;
  loginForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  eyeClick() {
    this.show = !this.show;
  }
}
