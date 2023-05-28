import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from 'src/app/_services/account.service';

@Component({
  selector: 'app-addusluge',
  templateUrl: './addusluge.component.html',
  styleUrls: ['./addusluge.component.css']
})
export class AdduslugeComponent implements OnInit {

  model: any = {};
  partners: any;
  zaglavlja: any;

  constructor(private accountService: AccountService, private toastr: ToastrService, private http: HttpClient) {}

  ngOnInit(): void {
    this.getPartners();
    this.getZaglavlja();
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

  addStavku() {
    this.accountService.addStavku(this.model).subscribe({
      next: () =>
      {
        console.log(this.model);
        this.toastr.success("Success.");
      },
      error: error => console.log(error)
    })
  }
}
