import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from 'src/app/_services/account.service';
import { StavkeRacuna } from '../_models/stavkeracuna';
import { ZaglavljeRacuna } from '../_models/zaglavljeracuna';
import { Partner } from '../_models/partner';

@Component({
  selector: 'app-usluge',
  templateUrl: './usluge.component.html',
  styleUrls: ['./usluge.component.css']
})
export class UslugeComponent implements OnInit {

  model: any = {};
  partneri: any;
  fakture: any;
  usluge: any;
  fakturnavrijednost: number | undefined;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getPartners();
    this.getFakture();
    this.getUsluge();
  }

  getPartners() {
    this.http.get('https://localhost:7003/api/partneri').subscribe({
      next: response => this.partneri = response,
      error: error => console.log(error)
    })
  }

  getFakture() {
    this.http.get('https://localhost:7003/api/fakture').subscribe({
      next: response => this.fakture = response,
      error: error => console.log(error)
    })
  }

  getUsluge() {
    this.http.get('https://localhost:7003/api/usluge').subscribe({
      next: response => {
        this.usluge = response;
      },
      error: error => console.log(error)
    })
  }
}
