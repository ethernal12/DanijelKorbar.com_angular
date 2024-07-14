import {Component, Input} from '@angular/core';
import {FormControl, NgForm, Validators} from "@angular/forms";

@Component({
  selector: 'app-form-field-messages',
  templateUrl: './form-field-messages.component.html',
  styleUrls: ['./form-field-messages.component.scss']
})
export class FormFieldMessagesComponent {
  @Input() formControl = new FormControl('', [
    Validators.required,
    Validators.minLength(10)
  ]);

  getErrorMessage() {
    if (this.formControl.hasError('required')) {
      return 'Sporočilo je obvezno!';
    }
    if (this.formControl.hasError('minlength')){
      return 'Sporočilo je premajhno!';
    }

    return 'Sporočilo ni veljavno!'
  }

}
