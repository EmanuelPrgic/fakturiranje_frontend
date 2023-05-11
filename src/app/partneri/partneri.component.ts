import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-partneri',
  templateUrl: './partneri.component.html',
  styleUrls: ['./partneri.component.css']
})
export class PartneriComponent implements OnInit{
  model: any = {};
  partners: any;

  constructor(private accountService: AccountService, private toastr: ToastrService, private http: HttpClient) {}

  ngOnInit(): void {
    this.getPartners();
  }

  addPartner() {
    this.accountService.addPartner(this.model).subscribe({
      next: response => {
        console.log(this.model);
      },
      error: error => console.log(error)

    })
  }

  getPartners() {
    this.http.get('https://localhost:7003/api/partner').subscribe({
      next: response => this.partners = response,
      error: error => console.log(error)
    })
  }

}
