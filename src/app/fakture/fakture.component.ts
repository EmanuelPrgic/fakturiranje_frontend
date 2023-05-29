import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ZaglavljeRacuna } from '../_models/zaglavljeracuna';

@Component({
  selector: 'app-fakture',
  templateUrl: './fakture.component.html',
  styleUrls: ['./fakture.component.css']
})
export class FaktureComponent implements OnInit{

  constructor(private http: HttpClient) {}
  partners: any;
  fakture: any;
  editMode = false;
  faktura: any;

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

  editToggle(brojracuna: number) {
    this.editMode = !this.editMode;
    this.http.get('https://localhost:7003/api/fakture/' + brojracuna).subscribe({
      next: response => this.faktura = response
    })
  }

}
