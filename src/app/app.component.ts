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

  user = {
    username: '',
    email: '',
    secretQuestion: '',
    answer: '',
    gender: ''
  }
  submitted = false;

  onSubmit() {
    console.log(this.signUpForm);

    // Update our fields, so we can display them at the bottom of the page
    this.submitted = true;
    this.user.username = this.signUpForm.value.userData.username;
    this.user.email = this.signUpForm.value.userData.email;
    this.user.secretQuestion = this.signUpForm.value.secret;
    this.user.answer = this.signUpForm.value.questionAnswer;
    this.user.gender = this.signUpForm.value.gender;
  }

  // Here we are access our signUpForm and 'patch in' the value for username.
  // The alternative is the rewrite the entire form (commented out below this.)
  suggestUserName() {
    const suggestedName = 'Superuser';
    this.signUpForm.form.patchValue({
      userData: {
        username: suggestedName
      }
    })
  }

  // This approach will overwrite lots of content that was already inputted.
  // The advantage is we can set many values at once.
//   suggestUserName() {
//     const suggestedName = 'Superuser';
//     this.signUpForm.setValue({
//       userData: {
//         username: suggestedName,
//         email: ''
//       },
//       secret: 'pet',
//       questionAnswer: '',
//       gender: 'male'
//     })}

}
