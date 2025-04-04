import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css',
})
export class AppComponent {
  private fb = inject(FormBuilder);
  // email = new FormControl('hello', Validators.required);

  form: FormGroup = this.fb.group({
    email: [
      '',
      [
        Validators.required,
        Validators.pattern(
          `^[a-zA-Z0-9]+([._-][0-9a-zA-Z]+)*@[a-zA-Z0-9]+([.-][0-9a-zA-Z]+)*\.[a-zA-Z]{2,}$`
        ),
      ],
    ],
    password: ['', Validators.required],
  });

  // form = new FormGroup({
  //   email: new FormControl('', [Validators.required, Validators.email]),
  //   password: new FormControl('', Validators.required),
  // });

  get email() {
    return this.form.get('email') as FormControl;
  }

  ngOnInit(): void {
    // this.email.valueChanges.pipe(debounceTime(1000)).subscribe((v) => {
    //   console.log(v);
    // });
  }

  login() {
    console.log(this.form.value);
  }
}
