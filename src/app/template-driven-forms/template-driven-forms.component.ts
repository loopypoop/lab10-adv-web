import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-template-driven-forms',
  templateUrl: './template-driven-forms.component.html',
  styleUrls: ['./template-driven-forms.component.css']
})
export class TemplateDrivenFormsComponent implements OnInit {

  constructor() { }
  @ViewChild('contactForm') contactForm: NgForm;

  countryList: Country[] = [
    new Country('1', 'KZ'),
    new Country('2', 'UK'),
    new Country('3', 'USA')
  ];

  ngOnInit(): void {
  }

  onSubmit(f: NgForm): void {
    console.log(f.value);
  }

}

export class Contact {
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

export class Country {
  id: string;
  name: string;

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }
}
