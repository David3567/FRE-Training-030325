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
    // console.log('wishlist component: ', this.bookService.getwishlist);

    this.bookService.wishes$.subscribe((data) => {
      this.wishlist = data;
    });

    this.bookService.books$.subscribe((data) => {
      console.log('from wishlist: ', data);
    });
  }

  // addHardcode() {
  //   this.bookService.wishes$.next(['hehe']);
  // }
}
