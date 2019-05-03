import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})

export class ContactFormComponent implements OnInit {

  contactForm = new FormGroup({
    firstName: new FormControl('Nome'),
    lastName: new FormControl('Cognome')
  });

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log('Submitted', this.contactForm.value);
  }

}
