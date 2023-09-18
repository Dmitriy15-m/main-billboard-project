import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-selected-category-title',
  templateUrl: './selected-category-title.component.html',
  styleUrls: ['./selected-category-title.component.scss'],
})
export class SelectedCategoryTitleComponent implements OnInit, OnDestroy {
  title!: string;
  private subscription!: Subscription;

  constructor(private activateRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.subscription = this.activateRoute.params.subscribe(
      (params) => (this.title = params['id'])
    );
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
