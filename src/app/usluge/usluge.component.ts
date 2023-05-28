import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from 'src/app/_services/account.service';

@Component({
  selector: 'app-usluge',
  templateUrl: './usluge.component.html',
  styleUrls: ['./usluge.component.css']
})
export class UslugeComponent implements OnInit {

  model: any = {};
  partners: any;
  zaglavlja: any;
  stavke: any;

  constructor(private accountService: AccountService, private toastr: ToastrService, private http: HttpClient) {}

  ngOnInit(): void {
    this.getPartners();
    this.getZaglavlja();
    this.getStavke();
  }

  getPartners() {
    this.http.get('https://localhost:7003/api/Partneri').subscribe({
      next: response => this.partners = response,
      error: error => console.log(error)
    })
  }

  getZaglavlja() {
    this.http.get('https://localhost:7003/api/fakture/zaglavlje').subscribe({
      next: response => this.zaglavlja = response,
      error: error => console.log(error)
    })
  }

  getStavke() {
    this.http.get('https://localhost:7003/api/fakture/stavke').subscribe({
      next: response => {
        this.stavke = response;
        this.stavke.fakturnavrijednost = this.stavke.cijenakm * this.stavke.kolicina;
      },
      error: error => console.log(error)
    })
  }
}
