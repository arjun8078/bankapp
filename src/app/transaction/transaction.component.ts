import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit {
  acno:any
  trans:any
  constructor(private ds:DataService) {
    this.acno=this.ds.currentAcno
    this.trans=this.ds.getTransaction(this.acno)
  }

  ngOnInit(): void {
  }

}
