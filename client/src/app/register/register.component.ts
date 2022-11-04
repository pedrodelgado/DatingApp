import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Input() usersFromHomeComponent: any;
  @Output() cancelRegister = new EventEmitter();
  model: any = {};

  constructor() { }

  ngOnInit(): void {
  }

  register(){
    console.log(this.model);
  }
  
  cancel(){
    console.log('cancelled')
    this.cancelRegister.emit(false);
  }
}
