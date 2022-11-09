import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegiterComponent } from './regiter/regiter.component';
import { TransactionComponent } from './transaction/transaction.component';

const routes: Routes = [
  {
    path:"",component:LoginComponent
  },
  {
    path:"dashboard",component:DashboardComponent
  }
  ,
  {
    path:'regiter',component:RegiterComponent
  },
  {
    path:'transaction',component:TransactionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
