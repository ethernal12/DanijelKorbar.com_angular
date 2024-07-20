import {Component, inject} from '@angular/core';
import {slideInAnimation} from 'src/app/animations/animations';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {FormspreeService} from "../../services/formspree.service";
import {MatSnackBar} from "@angular/material/snack-bar";


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations: [slideInAnimation],
})

export class ContactComponent {

  private _formspreeService = inject(FormspreeService)
  private _snacBar = inject(MatSnackBar)

  // Set the variable as FormGroup instance
  contactForm: FormGroup


  constructor() {

    // Make form group with form controls
    this.contactForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('', Validators.required)
    })
  }

  // Function to send email if valid
  sendFormspree() {
    if (this.contactForm.valid)
      this._formspreeService.sendContact(this.contactForm.value).subscribe()
    this.contactForm.reset()
    this._snacBar.open('Thank You for sending your message. I will reply as soon as possible!', 'Close', {
      duration: 3000
    })
  }

}
