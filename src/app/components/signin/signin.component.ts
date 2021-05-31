import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {
  angForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  account_validation_messages = {
    email: [
      { type: 'required', message: 'Email is required' },
      { type: 'pattern', message: 'Enter a valid email' },
    ],
    password: [
      {
        type: 'minlength',
        message: 'Password must be at least 5 characters long',
      },
      { type: 'required', message: 'Password is required' },
      {
        type: 'pattern',
        message:
          'Your password must contain at least one uppercase, one lowercase, and one number',
      },
    ],
  };

  ngOnInit(): void {
    this.angForm = this.fb.group({
      email: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
        ])
      ),
      password: new FormControl(
        '',
        Validators.compose([
          Validators.minLength(5),
          Validators.required,
          Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$'),
        ])
      ),
    });
  }

  resetForm(): void {
    this.angForm.reset();
  }

  sendReqest(): void {
    if (this.angForm.valid) {
      console.log('USER', this.angForm.value);
    } else {
      console.log('No valido');
    }
  }
}
