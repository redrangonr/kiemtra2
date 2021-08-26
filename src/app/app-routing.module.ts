import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CreateBookComponent} from './book/create-book/create-book.component';
import {DeleteBookComponent} from './book/delete-book/delete-book.component';
import {EditBookComponent} from './book/edit-book/edit-book.component';
import {ListBookComponent} from './book/list-book/list-book.component';
import {DetailBookComponent} from './book/detail-book/detail-book.component';

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
    path: 'delete/:id',
    component: DeleteBookComponent
  },
  {
    path: 'edit/:id',
    component: EditBookComponent
  },
  {
    path: 'detail/:id',
    component: DetailBookComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
