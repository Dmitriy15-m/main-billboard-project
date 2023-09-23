import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent {
  constructor(private auth: AuthService) {}

  myForm: FormGroup = new FormGroup({
    phone: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[\d\+][\d\(\)\ -]{4,14}\d$/),
    ]),
    password: new FormControl('', [Validators.required]),
  });

  submitForm() {
    this.auth.signUp(this.myForm.value);
    this.myForm.reset();
  }
}
