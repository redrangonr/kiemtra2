import { Component, OnInit } from '@angular/core';
import {Book} from '../../model/book';
import {BookService} from '../../service/book.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent implements OnInit {

  bookForm: FormGroup = this.formBuiler.group({
    title: new FormControl('',[Validators.required]),
    author: new FormControl('',[Validators.required]),
    description : new FormControl('',[Validators.required]),
  })
  constructor(private bookService: BookService,
              private formBuiler: FormBuilder,) { }
  ngOnInit(): void {

  }
  Create(){
    const books = this.bookForm.value;
    this.bookService.createBook(books).subscribe(success =>alert('thanhcong'))
  }
}
