import {Component, Input} from '@angular/core';
import {FormControl, NgForm, Validators} from "@angular/forms";

@Component({
  selector: 'app-form-field-messages',
  templateUrl: './form-field-messages.component.html',
  styleUrls: ['./form-field-messages.component.scss']
})
export class FormFieldMessagesComponent {
  @Input() label: string = "Name"
  @Input() formControl = new FormControl('', [
    Validators.required,
    Validators.minLength(10)
  ]);

  getErrorMessage() {
    if (this.formControl.hasError('required')) {
      return 'Message must have content!';
    }
    if (this.formControl.hasError('minlength')){
      return 'Message must contain at least 10 char.!';
    }

    return 'Message not valid!'
  }

}
