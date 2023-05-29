import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FaktureService } from 'src/app/_services/fakture.service';
import { UslugeService } from 'src/app/_services/usluge.service';

@Component({
  selector: 'app-addusluge',
  templateUrl: './addusluge.component.html',
  styleUrls: ['./addusluge.component.css']
})
export class AdduslugeComponent implements OnInit {

  model: any = {};
  partners: any;
  fakture: any;

  constructor(private uslugeService: UslugeService, private toastr: ToastrService, private http: HttpClient) {}

  ngOnInit(): void {
    this.getPartners();
    this.getFakture();
  }

  getPartners() {
    this.http.get('https://localhost:7003/api/partneri').subscribe({
      next: response => this.partners = response,
      error: error => console.log(error)
    })
  }

  getFakture() {
    this.http.get('https://localhost:7003/api/fakture').subscribe({
      next: response => this.fakture = response,
      error: error => console.log(error)
    })
  }

  addStavku() { 
    this.uslugeService.addUslugu(this.model).subscribe({
      next: () =>
      {
        console.log(this.model);
        this.toastr.success("Success.");
      },
      error: error => console.log(error)
    })
  }
}
