import { Component, OnInit } from '@angular/core';
import { FaktureService } from '../_services/fakture.service';
import { PartnerService } from '../_services/partner.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-fakture',
  templateUrl: './fakture.component.html',
  styleUrls: ['./fakture.component.css']
})
export class FaktureComponent implements OnInit{

  constructor(private faktureService: FaktureService, private partnerService: PartnerService, private toastr: ToastrService) {}

  partners: any;
  fakture: any;
  faktura: any;

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

  deleteFakturu(id: number)
  {
    this.faktureService.deleteFakturu(id).subscribe({
      next: () =>
      {
        this.toastr.success("Success!");
        this.getFakture();
      }
    })
  }
}
