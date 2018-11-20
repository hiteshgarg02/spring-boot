import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AddAccountComponent } from './add-account/add-account.component';
import { ListAccountComponent } from './list-account/list-account.component';
import { EditAccountComponent } from './edit-account/edit-account.component';
import { ListTransactionComponent } from './list-transaction/list-transaction.component';
import { AddTransactionComponent } from './add-transaction/add-transaction.component';

const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'add-account', component: AddAccountComponent },
    { path: 'list-account', component: ListAccountComponent },
    { path: 'list-transaction', component: ListTransactionComponent },
    { path: 'edit-account', component: EditAccountComponent },
    { path: 'add-transaction', component: AddTransactionComponent },
    {path : '', component : LoginComponent}
  ];

export const routing = RouterModule.forRoot(routes);
