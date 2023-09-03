import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IItemsList } from '../models/item-card';
import { Observable, catchError, delay, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ItemsCardService {
  constructor(private http: HttpClient) {}

  getData(): Observable<IItemsList> {
    return this.http.get<IItemsList>('assets/data/items.json').pipe(
      delay(2000),
      catchError((err: HttpErrorResponse) => {
        return throwError(() =>
          console.log(`Произошла ошибка загрузки данных ${err.message}`)
        );
      })
    );
  }
}

