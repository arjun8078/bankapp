import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  acno=""
  pass=""
  amount=""
  acno1=""
  pass1=""
  amount1=""
  user=""

  constructor(private router:Router,private ds:DataService) { 
    this.user=this.ds.currentUser
  }

  ngOnInit(): void {
  }
  deposit(){
    var acno=this.acno;
    var pass=this.pass;
    var amt=this.amount;
    const result=this.ds.deposit(acno,pass,amt)
    if(result){
      alert(`${amt} is deposited successfully.....balance is ${result}`)

    }
    
  }


  withdraw(){
    var acno1=this.acno1;
    var pass1=this.pass1;
    var amt1=this.amount1;
    const result=this.ds.withdraw(acno1,pass1,amt1)
    if(result){
      alert(`${amt1} is withdrawn..........now the balance is ${result}`)
    }

  }
}

