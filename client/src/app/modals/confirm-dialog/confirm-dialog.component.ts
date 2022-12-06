import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent implements OnInit {
  title = '';
  message ='';
  btnOkText = '';
  btnCancelText = '';
  result = false;

  constructor(public bsmodalRef: BsModalRef) { }

  ngOnInit(): void {
  }
  confirm(){
    this.result = true;
    this.bsmodalRef.hide();
  }
  decline(){
    this.bsmodalRef.hide();
  }

}
