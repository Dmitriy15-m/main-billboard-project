import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ErrorService {
  constructor() {}

  private errMessage = new Subject<string>();
  public errMessage$ = this.errMessage.asObservable();

  sendErrorMessage(err: string) {
    this.errMessage.next(err);
  }

  clearErrMessage() {
    this.errMessage.next('');
  }
}
