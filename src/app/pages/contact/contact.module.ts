import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormFieldEmailComponent} from "../../ui/parts/form-field/form-field-email/form-field-email.component";
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import {FormFieldUsernameComponent} from "../../ui/parts/form-field/form-field-username/form-field-username.component";
import {FormFieldMessagesComponent} from "../../ui/parts/form-field/form-field-messages/form-field-messages.component";
import {ContactComponent} from "./contact.component";
import {MatSnackBarModule} from "@angular/material/snack-bar";

@NgModule({
  declarations: [
    FormFieldEmailComponent,
    FormFieldUsernameComponent,
    FormFieldMessagesComponent,
    ContactComponent
  ],
  exports: [
    FormFieldEmailComponent,
    FormFieldUsernameComponent,
    FormFieldMessagesComponent

  ],
  imports: [
    CommonModule,
    MatInputModule,
    ReactiveFormsModule,
    MatIconModule,
    FormsModule,
    MatSnackBarModule
  ]
})
export class ContactModule { }
