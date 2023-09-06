import { IItemCard } from 'src/app/models/item-card';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss'],
})
export class ItemCardComponent implements OnInit {
  @Input() item!: IItemCard;
  // imageUrl!: string;

  ngOnInit(): void {
  //  this.imageUrl = this.item.img
  }
}
