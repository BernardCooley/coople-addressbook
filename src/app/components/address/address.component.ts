import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {

  @Input() address: Array<string> = [];
  @Input() index: Number;
  @Input() updatedAddress: Array<string>;
  @Output() addressToEdit = new EventEmitter<Array<string>>();

  constructor() { }

  editCurrentAddress(event) {
    var target = event.target || event.srcElement;

    this.addressToEdit.emit([
      target.querySelector('input[name="fullName"]').value,
      target.querySelector('input[name="zip"]').value,
      target.querySelector('input[name="country"]').value,
      target.querySelector('input[name="index"]').value
    ]);
  }

  ngOnInit() {
  }

}
