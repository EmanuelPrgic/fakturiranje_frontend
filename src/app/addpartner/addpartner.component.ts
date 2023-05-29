import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { PartnerService } from '../_services/partner.service';

@Component({
  selector: 'app-addpartner',
  templateUrl: './addpartner.component.html',
  styleUrls: ['./addpartner.component.css']
})
export class AddpartnerComponent implements OnInit {
  model: any = {};

  constructor(private partnerService: PartnerService, private toastr: ToastrService) {}

  ngOnInit(): void {
  }

  addPartner() {
    this.partnerService.addPartner(this.model).subscribe({
      next: () => {
        console.log(this.model);
        this.toastr.success("Success.")
      },
      error: error => console.log(error)

    })
  }
}
