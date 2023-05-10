import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-partneri',
  templateUrl: './partneri.component.html',
  styleUrls: ['./partneri.component.css']
})
export class PartneriComponent implements OnInit{
  @Output() cancelAddPartner = new EventEmitter();
  model: any = {};

  constructor(private accountService: AccountService, private toastr: ToastrService) {}

  ngOnInit(): void {
    
  }

  /* addPartner() {
    this.accountService.addpartner(this.model).subscribe({
      next: () => {
        this.cancel();
      },
      error: error => {
        this.toastr.error(error.error),
        console.log(error)
      }
    })
  } */

  cancel() {
    this.cancelAddPartner.emit(false);
  }

}
