import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {
  myForm:FormGroup
  constructor(
    private fb:FormBuilder
  ){
    this.myForm = this.fb.group({
      name:["",[Validators.required]],
      lastname:["",[Validators.required]],
      phone:["",[Validators.required]],
      email:["",[Validators.required, Validators.email]],
      password:["",[Validators.required, Validators.minLength(6),Validators.maxLength(14)]],

    })
  }

  register(){
    console.log(this.myForm.value);
  }

}
