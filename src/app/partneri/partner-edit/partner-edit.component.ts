import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PartnerService } from 'src/app/_services/partner.service';

@Component({
  selector: 'app-partner-edit',
  templateUrl: './partner-edit.component.html',
  styleUrls: ['./partner-edit.component.css']
})
export class PartnerEditComponent implements OnInit{
  @ViewChild('editForm') editForm: NgForm | undefined;

  partners: any = {};
  partner: any = {};

  constructor(private partnerService: PartnerService, private toastr: ToastrService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getPartners();
    this.loadPartner();
  }

  getPartners() {
    this.partnerService.getPartners().subscribe({
      next: partners => this.partners = partners
    })
  }

  loadPartner() {
    const idParam = this.route.snapshot.paramMap.get('id');
    const id = idParam ? +idParam : 0;

    if (!id) return;

    this.partnerService.getPartner(id).subscribe({
      next: partner => {
        this.partner = partner;
        console.log(this.partner);
      }
    })
  }

  updatePartner(id: number) {
    this.partnerService.updatePartner(id, this.partner).subscribe({
      next: () => {
        console.log(this.partner);
        this.toastr.success("Successfully updated!");
        this.editForm?.reset(this.partner);
      },
      error: error => console.log(error)
    })
  }


}
