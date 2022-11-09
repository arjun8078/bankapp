import { Injectable } from '@angular/core';
import { TransactionComponent } from '../transaction/transaction.component';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  currentUser:any
  currentAcno:any
  userDetails:any={
    1000:{acno:1000,username:"Arjun",password:1000,balance:10000,transaction:[]},
    1001:{acno:1001,username:"Akhil",password:1001,balance:10000,transaction:[]}
  }
  constructor() { }
  register(acno:any,username:any,password:any){
    var userDetails=this.userDetails
    if(acno in userDetails)
    {
      return false;
    }
    else{
      userDetails[acno]={
        acno,
        username,
        password,
        balance:0,
        transaction:[]
      }
      console.log(userDetails);
      return true
    }
  }

  login(acno:any,password:any){
    var userDetails=this.userDetails;
    if(acno in userDetails){
      if(password==userDetails[acno].password){
        this.currentUser=userDetails[acno].username
        this.currentAcno=acno
        return true;
      }
      else{
        alert("incorrect password")
        return false;
      }

    }
    else{
      alert("invalid user ")
      return false
    }
  }


  deposit(acno:any,pass:any,amt:any){
    var userDetails=this.userDetails
    var amount=parseInt(amt)
    if(acno in userDetails){
      if(pass == userDetails[acno].password){
        userDetails[acno].balance+=amount;
        userDetails[acno].transaction.push({
          type:'credit',
          amount
        })
        console.log(userDetails)
        
        return(userDetails[acno].balance)
      }
      else{
        alert('wrong password')
        return false
      }
    }
    else{
      alert('invalid username')
      return false
    }

  }
  withdraw(acno1:any,pass1:any,amt1:any){
    var userDetails=this.userDetails;
    var amount=parseInt(amt1);
    if(acno1 in userDetails){
      if(pass1==userDetails[acno1].password){
        if(userDetails[acno1].balance>amount){
          userDetails[acno1].balance-=amount
          userDetails[acno1].transaction.push(
            {
              type:'debit',
              amount
            })
            console.log(userDetails)
          return(userDetails[acno1].balance)
        }
        else{
          alert('insufficient balance')
          return false
        }
      }
      else{
        alert('incorrect password')
        return false
      }
    }
    else{
      alert('invalid user')
      return false
    }
  }
  getTransaction(acno:any){
   
    return this.userDetails[acno].transaction
  }
}
