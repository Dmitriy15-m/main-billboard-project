import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IItemCard } from 'src/app/models/item-card';


@Component({
  selector: 'app-item-card',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss'],
})
export class ItemCardComponent {
  @Input() item!: IItemCard;
}
