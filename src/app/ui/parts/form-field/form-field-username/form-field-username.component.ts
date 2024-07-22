import {Component, Input} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
@Component({
  selector: 'app-form-field-username',
  templateUrl: './form-field-username.component.html',
  styleUrls: ['./form-field-username.component.scss']
})
export class FormFieldUsernameComponent {
  @Input() label: string = "Name"
  @Input() formControl = new FormControl('', [Validators.required, Validators.pattern("[a-zA-Z]+\\s+[a-zA-Z]+")]);

  getErrorMessage() {
    if (this.formControl.hasError('required')) {
      return 'Name input is empty!';
    }
    return '';
  }

}
