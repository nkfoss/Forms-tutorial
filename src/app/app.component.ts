import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // onSubmit(form: NgForm) {
  //   console.log(form);
  // }

  // This is just an alternative to the commented out code above.
  // This is useful we need to access the form earlier than the moment we submit it.
  // Remember to use static: true, for Angular 8+
  @ViewChild('bandit', {static: true}) signUpForm: NgForm;
  defaultQuestion = 'pet';
  answer = "";
  genders = ['male', 'female'];

  onSubmit() {
    console.log(this.signUpForm)
  }

  suggestUserName() {
    const suggestedName = 'Superuser';
  }
}
