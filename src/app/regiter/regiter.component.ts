import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-regiter',
  templateUrl: './regiter.component.html',
  styleUrls: ['./regiter.component.scss']
})
export class RegiterComponent implements OnInit {
  // acno="";
  // uname=""
  // pass=""
  //register form model
 registerform=this.fb.group({//group
  uname:[''],//array
  acno:[''],
  pswd:['']})

  constructor(private fb:FormBuilder ,private ds:DataService,private router:Router) { }
//FormBuilder-class it contains group,array and control-
  ngOnInit(): void {
  }
  register()
  {
    // alert("clicked")
    var uname=this.registerform.value.uname;
    var acno=this.registerform.value.acno;
    var pswd=this.registerform.value.pswd;
    // var userDetails=this.ds.userDetails
    const result=this.ds.register(acno,uname,pswd)

    if(result){
      alert("success")
      this.router.navigateByUrl("")
    }
    else{
      alert("failed to register")
      this.router.navigateByUrl("regiter")
    }

  }


}
