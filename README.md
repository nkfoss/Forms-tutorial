### How does Angular create forms?

#### Template-driven approach
We can add ngModel in the input elements. This tells Angular that the input is a 'control' of the form. This is followed the 'name' attribute, which is how that field is represented in the form. A form is essentially just a set of key/value pairs, where the 'name' is the key, and the user input is the value. 

##### ngSubmit
Notice that our form has an ngSubmit directive. We do have a button within the form that is of type 'submit'...this means that button has some built-in JS functionality for submitting. If it's within the form, then form itself is being submitted. This message gets caught be Angular using our ngSubmit directive.

Once caught, we then can run our own function (on Submit). 

```HTML
<form (ngSubmit)="onSubmit(bandit)" #bandit="ngForm">
```

Notice the #bandit reference. The #bandit is a reference to the form itself, and is passed into the onSubmit method. We also set the value of the reference to ngForm. This is so we can access the Angular Form itself in the function.