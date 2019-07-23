import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddressbookContainerComponent } from './components/addressbook-container/addressbook-container.component';
import { AddressEditComponent } from './components/address-edit/address-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    AddressbookContainerComponent,
    AddressEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
