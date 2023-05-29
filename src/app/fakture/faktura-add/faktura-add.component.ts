import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FaktureService } from 'src/app/_services/fakture.service';

@Component({
  selector: 'app-faktura-add',
  templateUrl: './faktura-add.component.html',
  styleUrls: ['./faktura-add.component.css']
})
export class FakturaAddComponent implements OnInit{

  model: any = {};
  partners: any;

  constructor(private faktureService: FaktureService, private toastr: ToastrService, private http: HttpClient) {}

  ngOnInit(): void {
    this.getPartners();
  }

  getPartners() {
    this.http.get('https://localhost:7003/api/Partneri').subscribe({
      next: response => this.partners = response,
      error: error => console.log(error)
    })
  }

  addFakturu() {
    this.faktureService.addFakturu(this.model).subscribe({
      next: () =>
      {
        console.log(this.model);
        this.toastr.success("Success.");
      },
      error: error => console.log(error)
    })
  }
}
