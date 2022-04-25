import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesModule } from './pages.module';
// 
import { DashboardComponent } from './dashboard/dashboard.component';
import { Graphic1Component } from './graphic1/graphic1.component';
import { PagesComponent } from './pages.component';
import { ProgressComponent } from './progress/progress.component';
// 
const routes: Routes = [
    { 
        path: 'dashboard', 
        component: PagesComponent,
        children: [
            { path: '', component: DashboardComponent },
            { path: 'progress', component: ProgressComponent },
            { path: 'graphic1', component: Graphic1Component },
        ]
    },
];
  // 
  @NgModule({
    imports: [ 
        RouterModule.forChild( routes ),
        PagesModule
    ],
    exports: [ RouterModule ]
  })
  export class PagesRoutingModule { }