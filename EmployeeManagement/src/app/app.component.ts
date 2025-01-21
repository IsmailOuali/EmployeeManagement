import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { EmployeeModel } from './model/Employee';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet , ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'EmployeeManagement';
  employeeForm: FormGroup = new FormGroup({});
  employeeObj: EmployeeModel = new EmployeeModel();
  employeeList: EmployeeModel[] = [];

  constructor (){
    this.createForm();
    const oldData = localStorage.getItem("EmpData");

    if(oldData != null){
      const parserData = JSON.parse(oldData);
      this.employeeForm.controls['id'].setValue(parserData.length +1);
    }

  }


    createForm(){
      this.employeeForm = new FormGroup ({
        id: new FormControl(this.employeeObj?.id),
        name: new FormControl(this.employeeObj?.name),
        email: new FormControl(this.employeeObj?.email),
        address: new FormControl(this.employeeObj?.address),
        phoneNumber: new FormControl(this.employeeObj?.phoneNumber)
      })
    }

    onSave(){
      const oldData = localStorage.getItem("EmpData");

      if(oldData != null){
        const parserData = JSON.parse(oldData);
        this.employeeForm.controls['id'].setValue(parserData.length +1);
        this.employeeList.unshift(this.employeeForm.value);
      }else{
        this.employeeList.unshift(this.employeeForm.value);
      }
      localStorage.setItem("EmpData", JSON.stringify(this.employeeList));
    }


    OnEdit(item: EmployeeModel){
        this.employeeObj = item;
        this.createForm();
    }

    OnUpdate(){
      const record = this.employeeList.find(m=> m.id == this.employeeForm.controls['id'].value);
      if(record != undefined){
        record.address = this.employeeForm.controls['address'].value;
        record.name = this.employeeForm.controls['name'].value;
        record.email = this.employeeForm.controls['email'].value;
        record.phoneNumber = this.employeeForm.controls['phoneNumber'].value;
      }
      localStorage.setItem("EmpData", JSON.stringify(this.employeeList));
      this.employeeObj = new EmployeeModel();
      this.createForm();
    }

    OnDelete(id: number){
      const isDelete = confirm("Are y sure do u want to delete");
      if(isDelete){
        const index = this.employeeList.findIndex(m=>m.id == id);
        this.employeeList.splice(index, 1);
      }
    }

}
