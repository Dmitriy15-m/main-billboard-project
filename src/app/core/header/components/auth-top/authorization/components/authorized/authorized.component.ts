import { Component, Input } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-authorized',
  templateUrl: './authorized.component.html',
  styleUrls: ['./authorized.component.scss'],
})
export class AuthorizedComponent {
  constructor(private authService: AuthService) {}
  @Input() isLogin!: boolean;
  aside: boolean = false;

  logOut() {
    this.authService.logOut(this.isLogin);
  }

  showAside() {
    this.aside = !this.aside;
  }
}
