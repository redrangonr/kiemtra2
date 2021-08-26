import {Component, OnInit} from '@angular/core';
import {Book} from '../../model/book';
import {BookService} from '../../service/book.service';
import {ActivatedRoute} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {


  books: Book;
  id: string;
  bookForm: FormGroup = this.formBuilder.group({
    title: new FormControl('', [Validators.required]),
    author: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
  });

  constructor(private bookService: BookService,
              private activeroute: ActivatedRoute,
              private formBuilder: FormBuilder) {
  }

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
    this.books = {
      title: '',
      author: '',
      description: '',
    };
  }
Submit(){
    const books= this.bookForm.value;
console.log(books)
  this.bookService.updateBook(this.id,books).subscribe(sucsess=>{
    alert('thanh cong')
  })

}
}
