import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  acno=""
  pswd=""


 
  
  constructor(private router:Router,private ds:DataService) { }

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
    const result=this.ds.login(acno,psw)
    // var userDetails=this.ds.userDetails;
    if(result){
      alert("login succeesful")
      this.router.navigateByUrl("dashboard")
    }
    else{
      alert("login")
    }
    //   else{
    //     alert("incorect password")
    //   }
    // }
    // else{
    //   alert("user not found")
    // }
  }
}
// login(a:any,p:any)
//   {
//     // alert('done')
//     var acno=a.value;
//     var psw=p.value;
//     var userDetails=this.userDetails;

//     if(acno in userDetails){
//       if(psw==userDetails[acno].password)
//       {
//         alert("login successfull")
//       }
//       else{
//         alert("incorect password")
//       }
//     }
//     else{
//       alert("user not found")
//     }
//   }
// }
