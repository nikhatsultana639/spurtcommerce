/*
 * spurtcommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 Piccosoft Software Labs Pvt Ltd
 * Author Piccosoft Software Labs Pvt Ltd <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Component
import { CustomerAddComponent } from './add/add.component';
import { CustomerListComponent } from './list/list.component';
import { CustomerViewComponent } from './view/view.component';

const customerRoutes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: CustomerListComponent },
  { path: 'add', component: CustomerAddComponent },
  { path: 'view/:id', component: CustomerViewComponent },
  {
    path: 'edit/:id',
    component: CustomerAddComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(customerRoutes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule {}
