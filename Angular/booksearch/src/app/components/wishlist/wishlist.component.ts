import { Component } from '@angular/core';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-wishlist',
  standalone: false,
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.css',
})
export class WishlistComponent {
  wishlist: string[] = [];

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.bookService.wishlist$.subscribe((data) => {
      this.wishlist = data;
    });

    this.bookService.booklist$.subscribe((data) => {
      console.log('from wishlist: ', data);
    });
  }
}
