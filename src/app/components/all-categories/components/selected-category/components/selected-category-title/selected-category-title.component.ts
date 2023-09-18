import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-selected-category-title',
  templateUrl: './selected-category-title.component.html',
  styleUrls: ['./selected-category-title.component.scss']
})
export class SelectedCategoryTitleComponent {

  title!: string ;
  constructor(private activateRoute: ActivatedRoute) {
    console.log(this.activateRoute.snapshot.params);

    this.title = this.activateRoute.snapshot.params['id']
  }
}
