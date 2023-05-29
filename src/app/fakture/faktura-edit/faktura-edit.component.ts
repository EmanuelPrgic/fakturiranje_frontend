import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/_models/user';
import { ZaglavljeRacuna } from 'src/app/_models/zaglavljeracuna';

@Component({
  selector: 'app-faktura-edit',
  templateUrl: './faktura-edit.component.html',
  styleUrls: ['./faktura-edit.component.css']
})
export class FakturaEditComponent implements OnInit {
  @Input() faktureFromFaktureComponent: ZaglavljeRacuna | undefined;
  
  faktura: ZaglavljeRacuna | undefined;
  user: User | null = null;

  constructor() {
  }


  ngOnInit(): void {
    
  }

}
