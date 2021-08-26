import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CreateBookComponent} from './book/create-book/create-book.component';
import {DeleteBookComponent} from './book/delete-book/delete-book.component';
import {EditBookComponent} from './book/edit-book/edit-book.component';
import {ListBookComponent} from './book/list-book/list-book.component';

const routes: Routes = [
  {
    path: 'list',
    component: ListBookComponent
  },
  {
    path: 'create',
    component: CreateBookComponent
  },
  {
    path: 'delete',
    component: DeleteBookComponent
  },
  {
    path: 'edit/:id',
    component: EditBookComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
