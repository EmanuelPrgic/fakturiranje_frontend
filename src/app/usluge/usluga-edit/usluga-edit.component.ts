import { Component, OnInit } from '@angular/core';
import { StavkeRacuna } from 'src/app/_models/stavkeracuna';
import { ZaglavljeRacuna } from 'src/app/_models/zaglavljeracuna';
import { FaktureService } from 'src/app/_services/fakture.service';

@Component({
  selector: 'app-usluga-edit',
  templateUrl: './usluga-edit.component.html',
  styleUrls: ['./usluga-edit.component.css']
})
export class UslugaEditComponent implements OnInit{

  faktura: ZaglavljeRacuna | undefined;
  usluga: StavkeRacuna | undefined;

  constructor(private faktureService: FaktureService){}

  ngOnInit(): void {
    
  }

}
