import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressbookContainerComponent } from './addressbook-container.component';

describe('AddressbookContainerComponent', () => {
  let component: AddressbookContainerComponent;
  let fixture: ComponentFixture<AddressbookContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddressbookContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressbookContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
