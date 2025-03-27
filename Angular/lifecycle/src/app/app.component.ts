import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css',
})
export class AppComponent implements DoCheck {
  title = 'lifecycle';
  counter = 0;

  ngDoCheck(): void {
    console.log('component app checking!');
  }

  increment() {
    this.counter++;
  }
}
