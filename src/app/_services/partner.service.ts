import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { Partner } from '../_models/partner';

@Injectable({
  providedIn: 'root'
})
export class PartnerService {

  baseUrl = 'https://localhost:7003/api/';

  private currentPartnerSource = new BehaviorSubject<Partner | null>(null);

  constructor(private http: HttpClient) { }

  addPartner(model: Partner) {
    return this.http.post<Partner>(this.baseUrl + 'partneri/add', model).pipe(
      map(partner => {
        if (partner) {
          localStorage.setItem('partner', JSON.stringify(partner));
          this.currentPartnerSource.next(partner);
        }
      })
    );
  }
}
