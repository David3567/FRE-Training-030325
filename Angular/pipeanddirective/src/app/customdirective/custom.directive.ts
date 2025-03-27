import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';

@Directive({
  standalone: false,
  selector: '[mydirective]',
})
export class CustomDirective implements OnInit {
  @Input() defaultColor = '';
  @Input() highlightColor = '';

  @HostBinding('value') name = 'hello';

  @HostListener('mouseenter')
  onMouseEnter(): void {
    this.name = '';
    this.highlight(this.highlightColor || this.defaultColor || 'red');
    this.name = '5px solid blue';
  }
  @HostListener('mouseleave')
  onMouseLeave(): void {
    this.name = '';
    this.highlight('');
  }

  constructor(private el: ElementRef) {}

  ngOnInit(): void {}

  highlight(color: string): void {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
