import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Book} from '../model/book';
const URL_API = ' http://localhost:3000/books';
@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private HttpClinet: HttpClient) { }
  getAll(): Observable<Book[]> {
    return this.HttpClinet.get<Book[]>(URL_API);
  }
  getById(id: string): Observable<Book[]>{
    return this.HttpClinet.get<Book[]>(URL_API + `/${id}`);
  }
  createBook(book: Book): Observable<Book> {
    return this.HttpClinet.post(URL_API, book);
  }
  deleteBook(id: string): Observable<Book> {
    return this.HttpClinet.delete(URL_API + `/${id}`);
  }
  updateBook(id: string, book: Book): Observable<Book> {
    return this.HttpClinet.put(URL_API + `/${id}`, book);
  }
}
