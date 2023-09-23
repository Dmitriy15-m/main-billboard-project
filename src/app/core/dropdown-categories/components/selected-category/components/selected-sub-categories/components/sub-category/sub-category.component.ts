import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ModalService } from 'src/app/services/modal-service/modal.service';

@Component({
  selector: 'app-sub-category',
  templateUrl: './sub-category.component.html',
  styleUrls: ['./sub-category.component.scss'],
  styles: [
    `
      :host {
        flex-grow: 1;
        flex-basis: 50%;
        flex-wrap: wrap;
      }
    `,
  ],
})
export class SubCategoryComponent implements OnInit {
  @Input() key!: any;

  constructor(private modalService: ModalService) {}

  isShow!: boolean;

  closeModal() {
    this.modalService.onShowModal(this.isShow);
  }

  ngOnInit(): void {
    this.modalService.isModal$.subscribe((value) => {
      this.isShow = value;
    });
  }
}
