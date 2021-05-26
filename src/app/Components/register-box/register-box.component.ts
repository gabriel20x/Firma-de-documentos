import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterData } from '../../Interfaces/Registro'

@Component({
  selector: 'app-register-box',
  templateUrl: './register-box.component.html',
  styleUrls: ['./register-box.component.css']
})
export class RegisterBoxComponent implements OnInit {
  RegisterForm : FormGroup
  constructor(
    private _builder: FormBuilder
  ) { 
    this.RegisterForm = this._builder.group({
      User: ['',Validators.required],
      Clave: ['',Validators.required],
      Email: ['',Validators.compose([Validators.email, Validators.required])]
        })
  }
  
  ngOnInit(): void {
  }
  
  Register(valor:any){
    console.log(valor)
  }
}