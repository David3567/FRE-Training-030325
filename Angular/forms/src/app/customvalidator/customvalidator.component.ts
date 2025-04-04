import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';

@Component({
  standalone: false,
  selector: 'app-customvalidator',
  templateUrl: './customvalidator.component.html',
  styleUrls: ['./customvalidator.component.css'],
})
export class CustomvalidatorComponent implements OnInit {
  myForm!: FormGroup;

  get numVal() {
    return this.myForm.get('numVal');
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.myForm = this.fb.group({
      numVal: ['', [customValidator(5), Validators.required], []],
    });
  }

  onSubmit() {
    console.log(this.myForm.value);
  }
}

interface ValidatorFn {
  (control: AbstractControl): ValidationErrors | null;
}

function customValidator(minlen: number): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (isNaN(control.value)) {
      return { nan: true };
    }
    if (control.value.length < minlen) {
      return { minlen: true, minlength: minlen };
    }
    return null;
  };
}
