import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FaktureService } from 'src/app/_services/fakture.service';
import { PartnerService } from 'src/app/_services/partner.service';

@Component({
  selector: 'app-addfakture',
  templateUrl: './addfakture.component.html',
  styleUrls: ['./addfakture.component.css']
})
export class AddfaktureComponent {

  model: any = {};
  partners: any;

  constructor(private faktureService: FaktureService, private toastr: ToastrService, private partnerService: PartnerService) {}

  ngOnInit(): void {
    this.getPartners();
  }

  getPartners() {
    this.partnerService.getPartners().subscribe({
      next: response => this.partners = response,
      error: error => console.log(error)
    })
  }

  addFakturu() {
    this.faktureService.addFakturu(this.model).subscribe({
      next: () =>
      {
        console.log(this.model);
        this.toastr.success("Success.");
      },
      error: error => console.log(error)
    })
  }
}
