import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ModalService } from 'src/app/services/modal-service/modal.service';

@Component({
  selector: 'app-categories-btn',
  templateUrl: './categories-btn.component.html',
  styleUrls: ['./categories-btn.component.scss'],
})
export class CategoriesBtnComponent implements OnInit, OnDestroy {
  constructor(
    private modalService: ModalService,
    // private router: Router,
  ) {}

  private subscription!: Subscription;
  isShow: boolean = false;

  toggle() {
    this.modalService.onShowModal(this.isShow);
  }

  ngOnInit(): void {
    this.subscription = this.modalService.isModal$.subscribe((value) => {
      this.isShow = value});
  }


  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
