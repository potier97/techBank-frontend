import { Component, OnInit } from '@angular/core';
import { NewUser } from 'src/app/models/newUser';
import { AngularMaterialModule } from 'src/app/angular-material.module'
import {FormControl} from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  newUser: NewUser = {
    name: "",
    lastName: "",
    document: 0,
    typeDocument: "",
    mail: "",
    direction: "",
    password: "",
    repeatedPassword: "",
    role: ""

  }
  AccountList: string[] = ['CAT', 'CATS', 'CDTS'];
  DocumentList: string[] = ['NIT', 'CC', 'CE', 'TI', 'PAP'];

  toppings = new FormControl();
  constructor() { }

  ngOnInit(): void {
  }

  sendReqest(): void {
      console.log('USER', this.newUser)
  }

}
