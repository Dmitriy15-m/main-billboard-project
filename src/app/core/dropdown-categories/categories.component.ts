import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ModalService } from 'src/app/services/modal-service/modal.service';
import { CategoriesService } from './service/categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
  providers: [CategoriesService],
})
export class CategoriesComponent implements OnInit, OnDestroy {
  constructor(private modalService: ModalService) {}

  private subscription!: Subscription;
  isShow: boolean = false;

  toggle() {
    this.modalService.onShowModal(this.isShow);
  }

  ngOnInit(): void {
    this.subscription = this.modalService.isModal$.subscribe((value) => {
      this.isShow = value;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
