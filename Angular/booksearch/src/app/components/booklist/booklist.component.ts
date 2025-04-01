import { Component } from '@angular/core';
import { BookService } from '../../services/book.service';
import { Book } from '../../services/book.interfaces';

@Component({
  selector: 'app-booklist',
  standalone: false,
  templateUrl: './booklist.component.html',
  styleUrl: './booklist.component.css',
})
export class BooklistComponent {
  booklist: Book[] = [];

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.bookService.booklist$.subscribe((data: Book[]) => {
      console.log('from the booklist: ', data);
      this.booklist = data;
    });
  }

  addtowishList(name: string) {
    this.bookService.addtowishList(name);
  }
}
