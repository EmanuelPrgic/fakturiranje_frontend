import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { User } from '../_models/user'
import { Partner } from '../_models/partner';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  baseUrl = 'https://localhost:7003/api/';
  private currentUserSource = new BehaviorSubject<User | null>(null);
  private currentPartnerSource = new BehaviorSubject<Partner | null>(null);

  currentUser$ = this.currentUserSource.asObservable();
  partner$ = this.currentPartnerSource.asObservable();


  constructor(private http: HttpClient) 
  { 

  }

  login(model: any) 
  {
    return this.http.post<User>(this.baseUrl + 'account/login', model).pipe(
      map((response: User) => {
        const user = response;
        if (user) {
          localStorage.setItem('user', JSON.stringify(user));
          this.currentUserSource.next(user);
        }
      })
    )
  }

  register(model: any) {
    return this.http.post<User>(this.baseUrl + 'account/register', model).pipe(
      map(user => {
        if (user) {
          localStorage.setItem('user', JSON.stringify(user));
          this.currentUserSource.next(user);
        }
      })
    );
  }

  addPartner(model: any) {
    return this.http.post<Partner>(this.baseUrl + 'partner/add', model).pipe(
      map(partner => {
        if (partner) {
          localStorage.setItem('partner', JSON.stringify(partner));
          this.currentPartnerSource.next(partner);
        }
      })
    );
  }
  
  setCurrentUser(user: User){
    this.currentUserSource.next(user);
  }

  logout() {
    localStorage.removeItem('user');
    this.currentUserSource.next(null);
  }
}
