import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.scss'],
})
export class AuthorizationComponent implements OnInit {
  constructor(private authService: AuthService) {}
  
  isLogin!: boolean;

  ngOnInit(): void {
    this.authService.isLogin$.subscribe((value) => {
      this.isLogin = value;
    });
  }
}
