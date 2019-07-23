import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddressbookContainerComponent } from './components/addressbook-container/addressbook-container.component';
import { AddressEditComponent } from './components/address-edit/address-edit.component';
import { AddressListComponent } from './components/address-list/address-list.component';
import { AddressComponent } from './components/address/address.component';
import { AddressService } from './services/address/address.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AddressbookContainerComponent,
    AddressEditComponent,
    AddressListComponent,
    AddressComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AddressService],
  bootstrap: [AppComponent]
})
export class AppModule { }
