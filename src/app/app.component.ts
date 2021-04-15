import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Template driven forms';


  countryList: country[] = [
    new country('1', 'KZ'),
    new country('2', 'UK'),
    new country('3', 'USA')
  ];

  contact: contact;

  ngOnInit() {

    this.contact = {
      firstname: 'Name',
      lastname: 'Surname',
      email: 'email@gmail.com',
      gender: 'male',
      isMarried: true,
      country: '2',
      address: {
        city: 'London',
        street: 'Oxford Rd',
        pincode: 'M139JS'
      }
    };

  }

  onSubmit() {
    console.log(this.contact);
  }

  setDefaults() {
    this.contact = {
      firstname: 'Name',
      lastname: 'Surname',
      email: 'email@gmail.com',
      gender: 'male',
      isMarried: true,
      country: '2',
      address: {
        city: 'London',
        street: 'Oxford Rd',
        pincode: 'M139JS'
      }
    };
  }

  changeCountry() {
    this.contact.country = "1";
  }

  reset(contactForm: NgForm) {
    contactForm.resetForm();
  }
}

export class contact {
  firstname: string;
  lastname: string;
  email: string;
  gender: string;
  isMarried: boolean;
  country: string;
  address: {
    city: string;
    street: string;
    pincode: string;
  };
}


export class country {
  id: string;
  name: string;

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }
}
