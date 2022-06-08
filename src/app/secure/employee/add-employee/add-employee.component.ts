import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeesCrudService } from './../../../service/employees-crud.service';
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {

  empForm: FormGroup;

  constructor(public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private crudService: EmployeesCrudService) { 
      this.empForm = this.formBuilder.group({
      e_name: [''],
      e_username: [''],
      e_email: [''],
      e_contact: ['']
    })}

  ngOnInit(): void {
  }

  onSubmit(): any {
    this.crudService.AddEmployees(this.empForm.value)
    .subscribe(() => {
        console.log('Data added successfully!')
        this.ngZone.run(() => this.router.navigateByUrl('/view-employees'))
      }, (err: any) => {
        console.log(err);
    });
  }

}
