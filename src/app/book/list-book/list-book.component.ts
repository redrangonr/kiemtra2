import { Component, OnInit } from '@angular/core';
import {Book} from '../../model/book';
import {BookService} from '../../service/book.service';

@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.css']
})
export class ListBookComponent implements OnInit {

  // @ts-ignore
  books: Book[];
  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.getList()
  }
getList(){
    this.bookService.getAll().subscribe(seccse => this.books = seccse);
}
}
