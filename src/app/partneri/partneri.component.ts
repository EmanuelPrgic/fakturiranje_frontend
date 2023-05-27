import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-partneri',
  templateUrl: './partneri.component.html',
  styleUrls: ['./partneri.component.css']
})
export class PartneriComponent implements OnInit{
  partners: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getPartners();
  }

  getPartners() {
    this.http.get('https://localhost:7003/api/Partneri').subscribe({
      next: response => this.partners = response,
      error: error => console.log(error)
    })
  }

}
