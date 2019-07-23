import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddressbookContainerComponent } from './components/addressbook-container/addressbook-container.component';

const routes: Routes = [
  {
    path: 'addressbook', 
    component: AddressbookContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
