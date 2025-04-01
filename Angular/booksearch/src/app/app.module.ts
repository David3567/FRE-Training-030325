import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BooklistComponent } from './components/booklist/booklist.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { BookService } from './services/book.service';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    BooklistComponent,
    WishlistComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  // providers: [BookService],
  providers: [{ provide: BookService, useClass: BookService }],
  bootstrap: [AppComponent],
})
export class AppModule {}
