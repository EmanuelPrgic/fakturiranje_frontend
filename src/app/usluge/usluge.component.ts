import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UslugeService } from '../_services/usluge.service';
import { PartnerService } from '../_services/partner.service';
import { FaktureService } from '../_services/fakture.service';

@Component({
  selector: 'app-usluge',
  templateUrl: './usluge.component.html',
  styleUrls: ['./usluge.component.css']
})
export class UslugeComponent implements OnInit {

  model: any = {};
  partneri: any;
  fakture: any;
  usluge: any;

  constructor(private uslugeService: UslugeService, private partnerService: PartnerService, private faktureService: FaktureService, private toastr: ToastrService) {}

  ngOnInit(): void {
    this.getPartners();
    this.getFakture();
    this.getUsluge();
  }

  getPartners() {
      this.partnerService.getPartners().subscribe({
      next: response => this.partneri = response,
      error: error => console.log(error)
    })
  }

  getFakture() {
    this.faktureService.getFakture().subscribe({
      next: response => this.fakture = response,
      error: error => console.log(error)
    })
  }

  getUsluge() {
    this.uslugeService.getUsluge().subscribe({
      next: response => {
        this.usluge = response;
      },
      error: error => console.log(error)
    })
  }

  deleteUsluga(id: number) {
    this.uslugeService.deleteUsluga(id).subscribe({
      next: () => {
        this.toastr.success("Succesfully deleted!");
        this.getUsluge();
      }
    })
  }
}
