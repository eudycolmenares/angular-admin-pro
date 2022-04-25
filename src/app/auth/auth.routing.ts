import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { AuthModule } from './auth/auth.module';
//
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
// 
const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
];
// 
@NgModule({
imports: [ 
    RouterModule.forChild( routes ),
    // AuthModule
],
exports: [ RouterModule ]
})
export class AuthRoutingModule { }