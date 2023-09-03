import { Component, OnInit, OnDestroy } from '@angular/core';
import { ItemsCardService } from '../../services/items-card.service';
import { IItemsList } from 'src/app/models/item-card';
import { Observable, Subscription, tap } from 'rxjs';

@Component({
  selector: 'app-items-page',
  templateUrl: './items-page.component.html',
  styleUrls: ['./items-page.component.scss'],
})
export class ItemsPageComponent implements OnInit {
  constructor(public itemCardsService: ItemsCardService) {}

  isLoading = true;
  itemList$!: Observable<IItemsList>;

  ngOnInit(): void {
    this.itemList$ = this.itemCardsService.getData().pipe(
      tap(() => this.isLoading = false)
    );
  }
}
