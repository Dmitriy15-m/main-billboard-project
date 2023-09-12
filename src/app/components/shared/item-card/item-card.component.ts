import { CommonModule } from '@angular/common';
import { IItemCard } from '../../../models/item-card';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss'],
})
export class ItemCardComponent  {
  @Input() item!: IItemCard;
}
