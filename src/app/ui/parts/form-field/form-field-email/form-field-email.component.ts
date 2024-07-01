import { Component, Input } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-form-field-email',
  templateUrl: './form-field-email.component.html',
  styleUrls: ['./form-field-email.component.css']
})
export class FormFieldEmailComponent {
  @Input() formControl = new FormControl('', [Validators.required, Validators.email]);

  constructor() {}

  getErrorMessage() {
    if (this.formControl.hasError('required')) {
      return 'Email is mandatory!';
    }
    return this.formControl.hasError('email') ? 'Email is not valid!' : '';
  }
}
