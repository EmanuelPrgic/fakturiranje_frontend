import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FaktureService } from 'src/app/_services/fakture.service';
import { PartnerService } from 'src/app/_services/partner.service';
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

  constructor(private uslugeService: UslugeService, private toastr: ToastrService, private partnerService: PartnerService, private faktureService: FaktureService) {}

  ngOnInit(): void {
    this.getPartners();
    this.getFakture();
  }

  getPartners() {
    this.partnerService.getPartners().subscribe({
      next: response => this.partners = response,
      error: error => console.log(error)
    })
  }

  getFakture() {
    this.faktureService.getFakture().subscribe({
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
