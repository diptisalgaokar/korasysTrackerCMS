import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ViewEmployeeComponent } from './secure/employee/view-employee/view-employee.component';
import { AddEmployeeComponent } from './secure/employee/add-employee/add-employee.component';

import { AddProjectComponent } from './secure/projects/add-project/add-project.component';
import { ViewProjectsComponent } from './secure/projects/view-projects/view-projects.component';

import { TimesheetsComponent } from './secure/reports/timesheets/timesheets.component';

const routes: Routes = [  
  { path: 'employee/add-employee', component: AddEmployeeComponent },
  { path: 'employee/view-employee', component: ViewEmployeeComponent },  

  { path: 'projects/add-project', component: AddProjectComponent },  
  { path: 'projects/view-projects', component: ViewProjectsComponent },  

  { path: 'reports/timesheets', component: TimesheetsComponent },  
  { path: '', pathMatch: 'full', redirectTo: 'employee/view-employee' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
