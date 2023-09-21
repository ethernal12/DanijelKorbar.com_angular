import { Component, Input } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-form-field-email',
  templateUrl: './form-field-email.component.html',
  styleUrls: ['./form-field-email.component.css']
})
export class FormFieldEmailComponent {
  @Input() formControl = new FormControl('', [Validators.required, Validators.email]);
  getErrorMessage(){
    if(this.formControl.hasError('required')){
      return 'Email is mandatory!'
    }
    return 'Email is not valid!'
  }

}
