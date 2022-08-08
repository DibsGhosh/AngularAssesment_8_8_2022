import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IUserInfo } from 'src/Model/UserInfo/userInfo.interface';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent{


  userInfo:IUserInfo = {
    firstName: '',
    middleName: '',
    lastName: '',
    age: "",
    gender: '',
    Dob: undefined,
    Address1: '',
    Address2: '',
    pin: ''
  }

  checkAge():boolean {
      if(+(this.userInfo.age) > 100 || +(this.userInfo.age) < 1){
        console.log(typeof(+(this.userInfo.age)));
        return true;
        
      }
    return false;
  }
  
  saveInfo(form:NgForm){
    console.log(form.value);
  }

}
