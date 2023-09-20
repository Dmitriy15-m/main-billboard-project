import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  constructor() {}

  private isModal: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );

  public isModal$: Observable<boolean> = this.isModal.asObservable();

  onShowModal(isShow: boolean): void {
    this.isModal.next(!isShow);
  }
}
