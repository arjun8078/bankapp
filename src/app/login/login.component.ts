import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  acno=""
  pswd=""

  userDetails:any={
    1000:{acno:1000,username:"arjun",password:1000,balance:10000},
    1001:{acno:1001,username:"akhil",password:1001,balance:10000}
  }
 
  
  constructor() { }

  ngOnInit(): void {
  }
  acNo(event:any)
  {
    this.acno=(event.target.value)
    console.log(this.acno)
  }
  psCh(event:any)
  {
    this.pswd=(event.target.value)
    console.log(this.pswd)
  }
  login()
  {
    // alert('done')
    var acno=this.acno;
    var psw=this.pswd;
    var userDetails=this.userDetails;

    if(acno in userDetails){
      if(psw==userDetails[acno].password)
      {
        alert("login successfull")
      }
      else{
        alert("incorect password")
      }
    }
    else{
      alert("user not found")
    }
  }
}
