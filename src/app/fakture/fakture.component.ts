import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fakture',
  templateUrl: './fakture.component.html',
  styleUrls: ['./fakture.component.css']
})
export class FaktureComponent implements OnInit{

  constructor(private http: HttpClient) {}
  partners: any;
  zaglavlja: any;

  ngOnInit(): void {
    this.getPartners();
    this.getZaglavlja();
  }

  getPartners() {
    this.http.get('https://localhost:7003/api/partneri').subscribe({
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

}
