import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-breadcrumbs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss'],
})
export class BreadcrumbsComponent {

  public breadcrumbs:any = [];

  constructor(private activateRoute: ActivatedRoute) {
    this.breadcrumbs = []
    console.log(this.activateRoute
      );

  }
}
