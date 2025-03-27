import { Component, OnInit } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-customdirective',
  templateUrl: './customdirective.component.html',
  styleUrls: ['./customdirective.component.scss'],
})
export class CustomdirectiveComponent implements OnInit {
  color = '';
  name = '';

  constructor() {}

  ngOnInit(): void {}
}
