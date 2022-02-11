import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBoxComponent } from './side-box/side-box.component';
import { MainBoxComponent } from './main-box/main-box.component';

@NgModule({
  declarations: [
    AppComponent,
    SideBoxComponent,
    MainBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
