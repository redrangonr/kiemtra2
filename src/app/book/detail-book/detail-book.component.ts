import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BookService} from '../../service/book.service';
import {Book} from '../../model/book';

@Component({
  selector: 'app-detail-book',
  templateUrl: './detail-book.component.html',
  styleUrls: ['./detail-book.component.css']
})
export class DetailBookComponent implements OnInit {
  books: Book;
  id: string;

  constructor(private activeroute: ActivatedRoute,
              private bookService: BookService) { }

  ngOnInit(): void {
    this.activeroute.paramMap.subscribe(sucess => {
      // @ts-ignore
      this.id = sucess.get('id');
      console.log(this.id);
      this.bookService.getById(this.id).subscribe(result => {
        // @ts-ignore
        this.books = result;
        console.log(result);
      }, error => {
        console.log(error);
      });
    });
  }
}
