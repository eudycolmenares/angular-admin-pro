import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
//
import { PagesComponent } from '../pages/pages.component';
// 
@NgModule({
  declarations: [
    PagesComponent,
  ],
  exports: [
    PagesComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ]
})
export class PagesModule { }