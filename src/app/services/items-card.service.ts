import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IItemsList } from '../models/item-card';
import { Observable, catchError, delay, timer, tap, of } from 'rxjs';
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root',
})
export class ItemsCardService {
  constructor(private http: HttpClient, private errService: ErrorService) {}

  getData(): Observable<0 | IItemsList> {
    return this.http.get<IItemsList>('../assets/data/items.json').pipe(
      delay(1000),
      catchError((err: HttpErrorResponse) => {
        return timer(2000).pipe(
          tap(() => {
            this.errService.sendErrorMessage(err.message);
          })
        );
      })
    );
  }

  checkApi(): Observable<any>{
   return this.http.get<any>('http://194.87.237.48:5000/Categories');
  }
}
