import {Component, OnInit} from '@angular/core';
import {BookService} from '../../service/book.service';
import {ActivatedRoute} from '@angular/router';
import {Book} from '../../model/book';

@Component({
  selector: 'app-delete-book',
  templateUrl: './delete-book.component.html',
  styleUrls: ['./delete-book.component.css']
})
export class DeleteBookComponent implements OnInit {

  constructor(private bookService: BookService,
              private activeroute: ActivatedRoute) {
  }

  books: Book;
  id: string;

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

  delete(id: any) {
    this.bookService.deleteBook(id).subscribe(susess => alert('thanh cong'));
  }
}
