import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  constructor(private auth: AuthService) {}

  myForm!: FormGroup;

  submitForm() {
    this.auth.signUp(this.myForm.value);
    this.myForm.reset();
  }

  ngOnInit(): void {
    this.myForm = new FormGroup({
      phone: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[\d\+][\d\(\)\ -]{4,14}\d$/),
      ]),
      password: new FormControl('', [Validators.required]),
    });
  }
}
