import { Component, OnInit, Input, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AddressService } from '../../services/address/address.service';

@Component({
  selector: 'app-address-edit',
  templateUrl: './address-edit.component.html',
  styleUrls: ['./address-edit.component.scss']
})
export class AddressEditComponent implements OnInit {
  @Output() updatedAddress = new EventEmitter<Array<string>>();
  @Input() addressToEdit: Array<string>;
  public editAddressForm: FormGroup;
  public fullNameErrors: Array<string> = [];
  public zipErrors: Array<string> = [];
  public countryErrors: Array<string> = [];
  public buttonText = '';

  constructor(private _formBuilder: FormBuilder, private _addressService: AddressService) { }

  submitAddress() {
    if(this.addressToEdit) {
      this.addressToEdit[0] = this.editAddressForm.value.fullName;
      this.addressToEdit[1] = this.editAddressForm.value.zip;
      this.addressToEdit[2] = this.editAddressForm.value.country;
      this._addressService.updateAddresse(this.addressToEdit);
    }else {
      this._addressService.addAddresses(this.editAddressForm.value);
    }
    this.editAddressForm.reset();
    this.addressToEdit = null;
  }

  removeErrorMessage(array, messageToRemove) {
    array = array.filter(function (item) {
      return item !== messageToRemove
    })
  }

  ngOnChanges(changes: SimpleChanges) {
    if(changes) {
      if(this.addressToEdit) {
        this.editAddressForm.get('fullName').setValue(this.addressToEdit[0]);
        this.editAddressForm.get('zip').setValue(this.addressToEdit[1]);
        this.editAddressForm.get('country').setValue(this.addressToEdit[2]);
        this.buttonText = 'Update';
      }else {
        this.buttonText = 'Submit';
      }
    }
  }

  ngOnInit() {
    this.editAddressForm = this._formBuilder.group({
      fullName: ['', [Validators.required]],
      zip: ['', Validators.required],
      country: ['', Validators.required]
    });

    this.editAddressForm.valueChanges.subscribe(() => {

      this.fullNameErrors = [];
      this.zipErrors = [];
      this.countryErrors = [];

      let fullName = this.editAddressForm.get('fullName');
      let zip = this.editAddressForm.get('zip');
      let country = this.editAddressForm.get('country');

      zip.value && !zip.value.includes('ABC') && zip.dirty ? this.zipErrors.push('zip must start with "ABC"') : this.removeErrorMessage(this.zipErrors, 'zip must start with "ABC"');

      zip.invalid && zip.dirty ? this.zipErrors.push('Zip required') : this.removeErrorMessage(this.zipErrors, 'Zip required');

      fullName.invalid && fullName.dirty ? this.fullNameErrors.push('Full name required') : this.removeErrorMessage(this.fullNameErrors, 'Full name required');

      country.invalid && country.dirty ? this.countryErrors.push('Country required') : this.removeErrorMessage(this.countryErrors, 'Country required');
    })
  }

}
