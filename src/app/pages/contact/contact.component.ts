import {Component, Input, OnInit} from '@angular/core';
import {slideInAnimation} from 'src/app/animations/animations';
import {FormControl, NgForm, Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http'


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  animations: [slideInAnimation],
})

export class ContactComponent {
  constructor(private httpClient: HttpClient) {}

  submitForm(contactForm: NgForm) {
    console.log('Submitting form:', contactForm.value);

    if (contactForm.valid) {
      this.httpClient.post('https://formspree.io/f/xjkbvglo', contactForm.value)
          .subscribe(
              response => {
                console.log('Formspree response:', response);
                alert('Form submitted successfully!');
              },
              error => {
                console.error('Formspree submission error:', error);
                alert('Form submission failed. Please try again.');
              }
          );
    } else {
      alert('Submit was not successful. Please fill out the form correctly.');
    }
  }
}
