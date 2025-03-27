import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-comp-b',
  standalone: false,
  templateUrl: './comp-b.component.html',
  styleUrl: './comp-b.component.css',
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompBComponent {
  @Input() data!: string;

  ngDoCheck(): void {
    console.log('component b checking!');
  }

  ngAfterContentChecked(): void {
    //Called after every check of the component's or directive's content.
    //Add 'implements AfterContentChecked' to the class.
  }

  checkRender() {
    return Math.random();
  }
}
