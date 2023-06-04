import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FaktureService } from 'src/app/_services/fakture.service';
import { PartnerService } from 'src/app/_services/partner.service';

@Component({
  selector: 'app-faktura-edit',
  templateUrl: './faktura-edit.component.html',
  styleUrls: ['./faktura-edit.component.css']
})
export class FakturaEditComponent implements OnInit {
  @ViewChild('editForm') editForm: NgForm | undefined;

  faktura: any = {};
  partners: any;

  constructor(private fakturaService: FaktureService, private route: ActivatedRoute, private toastr: ToastrService, private partnerService: PartnerService){}

  ngOnInit(): void {
    this.loadFakturu();
    this.getPartners();
  }

  getPartners() {
    this.partnerService.getPartners().subscribe({
      next: partners => this.partners = partners
    })
  }


  loadFakturu() {
    const idParam = this.route.snapshot.paramMap.get('id');
    const id = idParam ? +idParam : 0;

    if (!id) return;

    this.fakturaService.getFakturu(id).subscribe({
      next: faktura => {
        this.faktura = faktura;
        console.log(this.faktura);
      }
    })
  }

  updateFaktura(id: number) {
    this.fakturaService.updateFakturu(id, this.faktura).subscribe({
      next: () => {
        console.log(this.faktura);
        this.toastr.success("Successfully updated!");
        this.editForm?.reset(this.faktura);
      },
      error: error => console.log(error)
    })
  }
}
