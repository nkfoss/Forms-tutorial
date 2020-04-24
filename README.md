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

Here are some other built-in validators for Angular: https://angular.io/api/forms/Validators

