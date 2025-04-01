import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of, Subject, tap } from 'rxjs';
import { Book, BookSearchRes, ItemsEntity } from './book.interfaces';

@Injectable()
export class BookService {
  private baseUrl = 'https://www.googleapis.com/books/v1/volumes?q=';
  booklist$ = new Subject<Book[]>();
  wishlist: string[] = [];
  wishlist$ = new Subject<string[]>();

  get wishlistdata() {
    // render();
    return this.wishlist;
  }

  constructor(private http: HttpClient) {}

  addtowishList(bookname: string) {
    this.wishlist.push(bookname);
    this.wishlist$.next(this.wishlist);
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
      })
    );
  }
}
