import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  constructor(private authService: AuthService) {}

  isLogin!: boolean;

  ngOnInit(): void {
    this.authService.isLogin$.subscribe(value => {
      this.isLogin = value;
    })
  }
}
