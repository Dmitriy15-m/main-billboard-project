import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../../service/categories.service';

@Component({
  selector: 'app-categories-block',
  templateUrl: './categories-block.component.html',
  styleUrls: ['./categories-block.component.scss'],
})
export class CategoriesBlockComponent implements OnInit {
  constructor(private categoriesService: CategoriesService) {}

  categoriesData!: string[];

  sendCategoryName(category: string) {
    this.categoriesService.changeCategory(category);
  }

  ngOnInit(): void {
    this.categoriesData = this.categoriesService.categoriesData;
  }
}
