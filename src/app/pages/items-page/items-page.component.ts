import { Component, OnInit, OnDestroy } from '@angular/core';
import { ItemsCardService } from '../../services/items-card.service';
import { IItemsList } from 'src/app/models/item-card';
import { Observable, tap} from 'rxjs';
import { ErrorService } from 'src/app/services/error.service';

@Component({
  selector: 'app-items-page',
  templateUrl: './items-page.component.html',
  styleUrls: ['./items-page.component.scss'],
})
export class ItemsPageComponent implements OnInit {
  constructor(
    public itemCardsService: ItemsCardService,
    public errService: ErrorService
  ) {}

  isLoading = true;
  itemList$!: Observable<0 |IItemsList>;

  ngOnInit(): void {
    this.itemList$ = this.itemCardsService.getData().pipe(
      tap(() => {
        this.isLoading = false;
      })
    );
  }
}
