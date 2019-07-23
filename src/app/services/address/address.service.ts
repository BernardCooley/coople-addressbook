import { Injectable } from '@angular/core';
import { addressData } from './../../data/addresses';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor() { }

  getAddresses() {
    return addressData;
  }

  addAddresses(newAddress) {
    addressData.push({
      name: newAddress.fullName, 
        address: {
            zip: newAddress.zip, 
            country: newAddress.country
        }
    });
  }

  updateAddresse(updatedAddress) {
    addressData[updatedAddress[3]].name = updatedAddress[0];
    addressData[updatedAddress[3]].address.zip = updatedAddress[1];
    addressData[updatedAddress[3]].address.country = updatedAddress[2];
  }
}
