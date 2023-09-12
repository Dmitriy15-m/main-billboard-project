import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ErrorService } from 'src/app/services/error.service';

@Component({
  selector: 'app-error',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss'],
})
export class ErrorComponent {
  constructor(private errService: ErrorService) {}

  @Input() err!: string;

  closeErrContainer() {
    this.errService.clearErrMessage();
  }
}
