import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { SpinnerService } from './services/spinner.service';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-router-resolve';
  isloading = false;

  constructor(private router: Router, private spinnerService: SpinnerService) {}

  ngOnInit(): void {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationStart))
      .subscribe((event) => {
        console.log(event);
      });
  }

  loadProduct2() {
    this.spinnerService.setspinner(true);
  }
}
