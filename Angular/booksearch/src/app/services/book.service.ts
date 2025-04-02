import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  catchError,
  map,
  Observable,
  of,
  Subject,
  tap,
} from 'rxjs';
import { Book, BookSearchRes, ItemsEntity } from './book.interfaces';

@Injectable()
export class BookService {
  private readonly baseUrl = 'https://www.googleapis.com/books/v1/volumes?q=';
  // booklist$ = new Subject<Book[]>();
  private booklist$ = new BehaviorSubject<Book[]>([]);
  books$ = this.booklist$.asObservable();

  private wishlist$ = new BehaviorSubject<string[]>([]);
  wishes$ = this.wishlist$.asObservable();

  constructor(private http: HttpClient) {}

  addtowishList(bookname: string) {
    this.wishlist$.next([bookname, ...this.wishlist$.value]);
  }

  searchBook(bookname: string) {
    if (bookname.trim() === '') return of();

    return this.http.get<BookSearchRes>(this.baseUrl + bookname).pipe(
      map(({ items: books }: BookSearchRes) => {
        return books.map((ele: ItemsEntity) => {
          return {
            img: ele.volumeInfo?.imageLinks?.thumbnail || '',
            name: ele.volumeInfo.title,
            publisher: ele.volumeInfo.publisher || '',
            publisheDate: ele.volumeInfo.publishedDate || '',
            discription: ele.volumeInfo.description || '',
          } as Book;
        });
      }),
      tap((data: Book[]) => {
        console.log('from service: ', data);
        this.booklist$.next(data);
      }),
      catchError((e) => {
        return of(e);
      })
    );
  }
}
