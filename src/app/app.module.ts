import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateBookComponent } from './book/create-book/create-book.component';
import { DeleteBookComponent } from './book/delete-book/delete-book.component';
import { EditBookComponent } from './book/edit-book/edit-book.component';
import { ListBookComponent } from './book/list-book/list-book.component';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import { DetailBookComponent } from './book/detail-book/detail-book.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateBookComponent,
    DeleteBookComponent,
    EditBookComponent,
    ListBookComponent,
    DetailBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
