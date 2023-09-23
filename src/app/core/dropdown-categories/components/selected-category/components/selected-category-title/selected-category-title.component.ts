import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CategoriesService } from '../../../../service/categories.service';

@Component({
  selector: 'app-selected-category-title',
  templateUrl: './selected-category-title.component.html',
  styleUrls: ['./selected-category-title.component.scss'],
})
export class SelectedCategoryTitleComponent implements OnInit, OnDestroy {
  title!: string;
  private subscription!: Subscription;

  constructor(private categoryService: CategoriesService) {}

  ngOnInit(): void {
    this.subscription = this.categoryService.category$.subscribe((value) => {
      this.title = value;
    });
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
