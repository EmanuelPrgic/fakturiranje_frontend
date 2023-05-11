import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-addpartner',
  templateUrl: './addpartner.component.html',
  styleUrls: ['./addpartner.component.css']
})
export class AddpartnerComponent implements OnInit {

  model: any = {};

  constructor(private accountService: AccountService, private toastr: ToastrService, private http: HttpClient) {}

  ngOnInit(): void {
  }

  addPartner() {
    this.accountService.addPartner(this.model).subscribe({
      next: response => {
        console.log(this.model);
      },
      error: error => console.log(error)

    })
  }

}
