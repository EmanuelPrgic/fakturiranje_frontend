import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from 'src/app/_services/account.service';

@Component({
  selector: 'app-addzaglavlje',
  templateUrl: './addzaglavlje.component.html',
  styleUrls: ['./addzaglavlje.component.css']
})
export class AddzaglavljeComponent implements OnInit{

  model: any = {};
  partners: any;

  constructor(private accountService: AccountService, private toastr: ToastrService, private http: HttpClient) {}

  ngOnInit(): void {
    this.getPartners();
  }

  getPartners() {
    this.http.get('https://localhost:7003/api/Partneri').subscribe({
      next: response => this.partners = response,
      error: error => console.log(error)
    })
  }

  addZaglavlje() {
    this.accountService.addZaglavlje(this.model).subscribe({
      next: () =>
      {
        console.log(this.model);
        this.toastr.success("Success.");
      },
      error: error => console.log(error)
    })
  }
}
