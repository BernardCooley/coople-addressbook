import { Component, OnInit, Input, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { AddressService } from '../../services/address/address.service';

@Component({
  selector: 'app-address-list',
  templateUrl: './address-list.component.html',
  styleUrls: ['./address-list.component.scss']
})
export class AddressListComponent implements OnInit {

  @Output() addressToEdit = new EventEmitter<Array<string>>();
  @Input() updatedAddress: Array<string>;
  private addresses;

  constructor(private _addressService: AddressService) { }

  getAddresses() {
    this.addresses = this._addressService.getAddresses();
  }

  getClickedAddressData(event) {
    this.addressToEdit.emit(event);
  }

  ngOnChanges(changes: SimpleChanges) {
    changes ? this.getAddresses() : null;
  }

  ngOnInit() {
    this.getAddresses();
  }

}
