import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { SigninComponent } from './components/signin/signin.component';
import { AccountsComponent } from './components/accounts/accounts.component';
import { TransactionComponent } from './components/transaction/transaction.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: SigninComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'account', component: AccountsComponent },
  { path: 'transaction', component: TransactionComponent }
];
 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
