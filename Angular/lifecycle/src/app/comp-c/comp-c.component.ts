import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-comp-c',
  standalone: false,
  templateUrl: './comp-c.component.html',
  styleUrl: './comp-c.component.css',
})
export class CompCComponent {
  @Input() data!: string;

  ngDoCheck(): void {
    console.log('component c checking!');
  }

  checkRender() {
    return Math.random();
  }
}
