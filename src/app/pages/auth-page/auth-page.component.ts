import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.scss'],
})
export class AuthPageComponent implements OnInit {
  myForm!: FormGroup;

  constructor(private authService: AuthService) {}

  onSubmit() {
    this.authService.logIn(this.myForm.value);
    this.myForm.reset();
  }

  ngOnInit(): void {
    this.myForm = new FormGroup({
      phone: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }
}
