import { Component } from '@angular/core';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-booklist',
  standalone: false,
  templateUrl: './booklist.component.html',
  styleUrl: './booklist.component.css',
})
export class BooklistComponent {
  constructor(public bookService: BookService) {}

  addtowishList(name: string) {
    this.bookService.addtowishList(name);
  }
}
