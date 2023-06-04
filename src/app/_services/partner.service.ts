import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { Partner } from '../_models/partner';
import { AccountService } from './account.service';

@Injectable({
  providedIn: 'root'
})
export class PartnerService {

  baseUrl = 'https://localhost:7003/api/partneri';

  private currentPartnerSource = new BehaviorSubject<Partner | null>(null);

  constructor(private http: HttpClient, private accountService: AccountService) { }

  addPartner(model: Partner) {
    return this.http.post<Partner>(this.baseUrl + '/add', model).pipe(
      map(partner => {
        if (partner) {
          localStorage.setItem('partner', JSON.stringify(partner));
          this.currentPartnerSource.next(partner);
        }
      })
    );
  }

  getPartner(id: number)
  {
    return this.http.get<Partner>(this.baseUrl + "/" + id, this.accountService.getHttpOptions());
  }

  getPartners()
  {
    return this.http.get<Partner[]>(this.baseUrl);
  }

  updatePartner(id: number, partner: Partner)
  {
    return this.http.put(this.baseUrl + "/edit/" + id, partner);
  }

  deletePartner(id: number)
  {
    return this.http.delete(this.baseUrl + "/delete/" + id);
  }
}
