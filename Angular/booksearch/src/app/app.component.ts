import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'booksearch';
  private router = inject(Router);

  handleNavigation(path: string) {
    this.router.navigate([path]);
  }
}
