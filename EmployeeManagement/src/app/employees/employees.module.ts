import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: // EmployeeListComponent not created yet
       },
    ]),
  ],
})
export class EmployeesModule {}
