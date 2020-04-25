### How does Angular create forms?

#### Template-driven approach
We can add ngModel in the input elements. This tells Angular that the input is a 'control' of the form. This is followed the 'name' attribute, which is how that field is represented in the form.

##### ngSubmit
Notice that our form has an ngSubmit directive. We do have a button within the form that is of type 'submit'...this means that button has some built-in JS functionality for submitting. If it's within the form, then form itself is being submitted. This message gets caught be Angular using our ngSubmit directive.

Once caught, we then can run our own function (on Submit). 

```HTML
<form (ngSubmit)="onSubmit(bandit)" #bandit="ngForm">
```

Notice the #bandit reference. The #bandit is a reference to the form itself, and is passed into the onSubmit method. We also set the value of the reference to ngForm. This is so we can access the Angular Form itself in the function. We can log this to the browser console and inspect the form object.

If you expand the 'value' property, you'll see inputs that you submitted with the form. 

Now check the controls property. You can see the controls that we registered earlier. 

#### Validation

Following the ngModel directive, our forms have other directives used for validation. For example, 'required' and 'email' are validation directives. We can see how they work in the browser. When you inspect the form object, the property 'valid' reflects if the entire form is valid. You can also look at validity for individual form controls... like email, secret, and username. These are found in the form's 'controls' property.

We can also see this when we inspect individual HTML elements. For example, try inspecting the email input. Try inputting a valid email. You will see some attributes change like ng-dirty and ng-valid (which angular added automatically). 

Also notice that the submit button is disabled... this is done using property binding. You can see it in the button element. The form fields are also red if they are 1) touched... and 2) invalid. This is defined in the CSS file.

What about error messages for invalid forms? Notice our email input has #email = "ngModel". This is how we get access to the validity of the email input. Note the Boostrap help-block element below it. NgIf the email IS NOT valid and IS touched, then the helpbox appears. Notice that the template is directly accessing elements of the form control.

Here are some other built-in validators for Angular: https://angular.io/api/forms/Validators

#### Default form Values

We can do this two ways...

First, using property binding. The app component has a string called defaultQuestion = 'pet'. Notice in the template, this is referenced using property binding in the email input. The value 'pet' actually links it to option below it that also has the value 'pet'. This is how we make that option the default choice in the dropdown.

We can also use two-way binding. Notice how the security question's answer uses two-way binding...


#### Grouping Form Controls

If we have a rather larger form, we might want to group related controls together (so the form appears more organized). For example, when we inspect the form object in the browser console, the newer, more-viewable, organization would be an advantage. This is easy in the template-driven approach.

Notice the ngModelGroup directive in the template. It's set equal to a string (in our case 'userData'). If we inspect the 'value' property of the form, we can see that 'userData' exists here. The form's 'control' property also has 'userData' now.

The #userData reference allows us to display error messages if any member of the group is not valid. We can see this implemented with the ngFormGroup directive, and coded below the formGroup itself.

#### Radio Buttons

We implemented this with ngFor... for gender in our genders array... self explanatory.

#### Setting and Patching Form values

If we want to programmatically set a form value (for example, by clicking a button), there are many ways to do it. Two-way data binding would work well. 

In our case, we use the ViewChild. We can either 'patch-in' the value for the form we want to edit (which is how implemented it), or we can edit the entire form itself (not handy in our situation, so I've commented that implementation out).




