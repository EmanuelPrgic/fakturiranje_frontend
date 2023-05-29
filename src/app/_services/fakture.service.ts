import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ZaglavljeRacuna } from '../_models/zaglavljeracuna';
import { BehaviorSubject, map } from 'rxjs';
import { AccountService } from './account.service';

@Injectable({
  providedIn: 'root'
})
export class FaktureService {
  baseUrl = 'https://localhost:7003/api/';
  private currentFakturaSource = new BehaviorSubject<ZaglavljeRacuna | null>(null);
  currentFaktura$ = this.currentFakturaSource.asObservable();

  constructor(private http: HttpClient, private accountService: AccountService) { }

  getFakture() {
    return this.http.get<ZaglavljeRacuna[]>(this.baseUrl + 'fakture');
  }

  getFakturu(brojracuna: number) {
    return this.http.get<ZaglavljeRacuna>(this.baseUrl + 'fakture/' + brojracuna, this.accountService.getHttpOptions());
  }

  addFakturu(model: ZaglavljeRacuna) {
    return this.http.post<ZaglavljeRacuna>(this.baseUrl + 'fakture/add', model).pipe(
      map(faktura => {
        if (faktura) {
          localStorage.setItem('faktura', JSON.stringify(faktura));
          this.currentFakturaSource.next(faktura);
        }
      })
    );
}
}
