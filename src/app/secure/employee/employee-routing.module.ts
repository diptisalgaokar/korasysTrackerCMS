import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ViewEmployeeComponent } from './../../secure/employee/view-employee/view-employee.component';
import { AddEmployeeComponent } from './../../secure/employee/add-employee/add-employee.component';

const routes: Routes = [
  { path: 'employee/add-employee', component: AddEmployeeComponent },
  { path: 'employee/view-employee', component: ViewEmployeeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
