import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FaktureService } from 'src/app/_services/fakture.service';
import { UslugeService } from 'src/app/_services/usluge.service';

@Component({
  selector: 'app-usluga-edit',
  templateUrl: './usluga-edit.component.html',
  styleUrls: ['./usluga-edit.component.css']
})
export class UslugaEditComponent implements OnInit{
  @ViewChild('editForm') editForm: NgForm | undefined;

  usluga: any = {};
  fakture: any;

  constructor(private uslugaService: UslugeService, private route: ActivatedRoute, private faktureService: FaktureService, private toastr: ToastrService){}

  ngOnInit(): void {
    this.loadUsluga();
    this.getFakture();
  }

  getFakture() {
    this.faktureService.getFakture().subscribe({
      next: response => this.fakture = response,
      error: error => console.log(error)
    })
  }


  loadUsluga() {
    const idParam = this.route.snapshot.paramMap.get('id');
    const id = idParam ? +idParam : 0;

    if (!id) return;

    this.uslugaService.getUslugu(id).subscribe({
      next: usluga => {
        this.usluga = usluga;
        console.log(this.usluga);
      }
    })
  }

  updateUsluga(id: number) {
    this.uslugaService.updateUsluga(id, this.usluga).subscribe({
      next: () => {
        console.log(this.usluga);
        this.toastr.success("Successfully updated!");
        this.editForm?.reset(this.usluga);
      },
      error: error => console.log(error)
    })
  }
}
