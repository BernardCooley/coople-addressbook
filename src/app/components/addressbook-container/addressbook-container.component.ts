import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-addressbook-container',
  templateUrl: './addressbook-container.component.html',
  styleUrls: ['./addressbook-container.component.scss']
})
export class AddressbookContainerComponent implements OnInit {

  private addressToEdit: Array<string>;
  private updatedAddress: Array<string>;

  constructor() { }

  getClickedAddress(event) {
    this.addressToEdit = event;
  }

  getUpdatedAddress(event) {
    this.updatedAddress = event;
  }

  ngOnInit() {
  }

}
