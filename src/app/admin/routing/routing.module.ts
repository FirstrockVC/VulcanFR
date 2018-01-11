import { DashboardComponent } from './../dashboard/dashboard.component';
import { AdminComponent } from './../admin.component';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'admin',
        component: AdminComponent,
        children: [
          {
            path: '',
            component: DashboardComponent
          }
        ]
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }
