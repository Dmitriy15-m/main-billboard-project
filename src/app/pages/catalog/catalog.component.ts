import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { IItemsList } from 'src/app/models/item-card';
import { ItemsCardService } from 'src/app/services/items-card.service';
import { ModalService } from 'src/app/services/modal-service/modal.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
})
export class CatalogComponent implements OnInit {
  constructor(
    private activateRoute: ActivatedRoute,
    private catalogService: ItemsCardService,
  ) {}

  id = undefined;
  isLoading = true;
  itemList$!: Observable<0 | IItemsList>;



  ngOnInit(): void {
    this.id = this.activateRoute.snapshot.params['id'];

    this.itemList$ = this.catalogService
      .getData()
      .pipe(tap(() => (this.isLoading = false)));

     this.catalogService.checkApi().subscribe(value => {
      console.log(value);

     })
  }


}
