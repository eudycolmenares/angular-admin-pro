import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesRoutingModule } from './pages/pages.routing';
import { AuthRoutingModule } from './auth/auth.routing';
//
import { NoPageFoundComponent } from './404/404.component';
// 
const routes: Routes = [
  // path: '/dashboard' => PagesRoutingModule
  // path: 'auth' => AuthRoutingModule
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', component: NoPageFoundComponent },
];
// 
@NgModule({
  imports: [
    RouterModule.forRoot( routes ),
    PagesRoutingModule,
    AuthRoutingModule,
  ],
  exports: [
    RouterModule
  ]
})
export class AppRountingModule { }