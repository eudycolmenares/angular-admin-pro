import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRountingModule } from './app-rounting.module';
//
import { AppComponent } from './app.component';
// 
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRountingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }