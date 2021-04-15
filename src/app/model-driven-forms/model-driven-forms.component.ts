import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-model-driven-forms',
  templateUrl: './model-driven-forms.component.html',
  styleUrls: ['./model-driven-forms.component.css']
})
export class ModelDrivenFormsComponent implements OnInit {

  constructor() { }

  contactForm = new FormGroup({
    firstname: new FormControl(),
    lastname: new FormControl(),
    email: new FormControl(),
    password: new FormControl()
  });

  ngOnInit(): void {
  }

  onSubmit(): void{
    console.log(this.contactForm.value);
  }

}
