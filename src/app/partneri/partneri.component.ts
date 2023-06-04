import { Component, OnInit } from '@angular/core';
import { PartnerService } from '../_services/partner.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-partneri',
  templateUrl: './partneri.component.html',
  styleUrls: ['./partneri.component.css']
})
export class PartneriComponent implements OnInit{
  partners: any;

  constructor(private partnerService: PartnerService, private toastr: ToastrService) {}

  ngOnInit(): void {
    this.getPartners();
  }

  getPartners() {
    this.partnerService.getPartners().subscribe({
      next: partner => this.partners = partner
    })
  }

  deletePartner(id: number)
  {
    this.partnerService.deletePartner(id).subscribe({
      next: () =>
      {
        this.toastr.success("Success!");
        this.getPartners();
      }
    })
  }

}
