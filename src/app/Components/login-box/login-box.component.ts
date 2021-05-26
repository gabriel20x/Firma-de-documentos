import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterData } from '../../Interfaces/Registro'
 
@Component({
  selector: 'app-login-box',
  templateUrl: './login-box.component.html',
  styleUrls: ['./login-box.component.css']
})
export class LoginBoxComponent implements OnInit {
  LoginForm : FormGroup
  constructor(
    private _builder: FormBuilder
  ) { 
    this.LoginForm = this._builder.group({
      User: ['',Validators.required],
      Clave: ['',Validators.required],
    })
  }
  
  ngOnInit(): void {
  }
  
  Register(valor:any){
    console.log(valor)
  }
}
