import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { StavkeRacuna } from '../_models/stavkeracuna';
import { HttpClient } from '@angular/common/http';
import { AccountService } from './account.service';

@Injectable({
  providedIn: 'root'
})
export class UslugeService {
  baseUrl = 'https://localhost:7003/api/';
  private currentUslugaSource = new BehaviorSubject<StavkeRacuna | null>(null);
  
  currentUsluga$ = this.currentUslugaSource.asObservable();


  constructor(private http: HttpClient, private accountService: AccountService) { }

  getUsluge() {
    return this.http.get<StavkeRacuna[]>(this.baseUrl + "usluge");
  }

  getUslugu(id: number)
  {
    return this.http.get<StavkeRacuna>(this.baseUrl + "usluge/" + id, this.accountService.getHttpOptions());
  }

  addUslugu(model: StavkeRacuna) {
    return this.http.post<StavkeRacuna>(this.baseUrl + 'usluge/add', model).pipe(
      map(usluga => {
        if (usluga) {
          localStorage.setItem('usluga', JSON.stringify(usluga));
          this.currentUslugaSource.next(usluga);
        }
      })
    )
  }

  updateUsluga(id: number, stavkeRacuna: StavkeRacuna)
  {
    return this.http.put(this.baseUrl + "usluga/edit/" + id, stavkeRacuna);
  }

  deleteUsluga(id: number)
  {
    return this.http.delete(this.baseUrl + "usluga/delete/" + id);
  }
}
