import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { fromEvent, mergeMap, Subscription, switchMap } from 'rxjs';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-search',
  standalone: false,
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent {
  bookname = '';

  private sbp = new Subscription();
  private bookService = inject(BookService); // dj

  @ViewChild('inputbox', { static: true }) inputbox!: ElementRef;

  ngOnInit(): void {
    this.sbp.add(
      fromEvent(this.inputbox.nativeElement, 'input')
        .pipe(
          switchMap((e) => {
            return this.bookService.searchBook(this.bookname);
          })
        )
        .subscribe()
    ); // switchMap, mergeMap, concatMap
  }
  ngAfterViewInit(): void {
    console.log(this.inputbox);
  }
  ngOnDestroy(): void {
    this.sbp.unsubscribe();
  }

  handleInput() {
    // console.log(this.bookname);
  }
}
