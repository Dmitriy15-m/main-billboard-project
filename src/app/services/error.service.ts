import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ErrorService {
  constructor() {}

  errMessage$ = new Subject<string>();

  sendErrorMessage(err: string) {
    setTimeout(() => {
      this.errMessage$.next(err);
    }, 2000);
  }

  clearErrMessage() {
    this.errMessage$.next('');
  }
}
