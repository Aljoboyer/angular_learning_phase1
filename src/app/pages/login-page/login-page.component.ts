import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

    email = ''
    password = ''

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  reactiveForm = new FormGroup({
    email: new FormControl('', Validators.compose([Validators.required, Validators.email])),
    password: new FormControl('', Validators.required)
  })

  GoToHome(){
    if(this.reactiveForm.valid){
      const obj = {
        email: this.email,
        password: this.password
      }
      localStorage.setItem('Logindata', JSON.stringify(obj))
      this.router.navigateByUrl('/')
    }
    else{
     console.log( this.reactiveForm.hasError)
    }
  }
}
