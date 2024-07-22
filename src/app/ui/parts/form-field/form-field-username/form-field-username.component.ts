import {Component, Input} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
@Component({
  selector: 'app-form-field-username',
  templateUrl: './form-field-username.component.html',
  styleUrls: ['./form-field-username.component.scss']
})
export class FormFieldUsernameComponent {
  @Input() label: string = "Ime in priimek"
  @Input() formControl = new FormControl('', [Validators.required, Validators.pattern("[a-zA-Z]+\\s+[a-zA-Z]+")]);

  getErrorMessage() {
    if (this.formControl.hasError('required')) {
      return 'Input is mandatory!';
    }
    return 'Input doesn`t have 2 mandatory letters';
  }
}
