import { Component } from '@angular/core';
import { IUserInfo } from 'src/Model/UserInfo/userInfo.interface';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent{
  EmployeeList:IUserInfo[] = [
    {firstName:"Dibyendu", middleName:"", lastName:"Ghosh", age:"22", gender:"Male", Dob:"09/10/2000", Address1:"abc", Address2:"def", pin:"123456"},
    {firstName:"Ram", middleName:"kumar", lastName:"Tiwari", age:"23", gender:"Male", Dob:"12/11/1999", Address1:"defg", Address2:"abcd", pin:"123457"},
    {firstName:"Henry", middleName:"", lastName:"Cavil", age:"24", gender:"Male", Dob:"12/31/1998", Address1:"abcde", Address2:"fghij", pin:"123458"},
    {firstName:"Sunil", middleName:"Ravi", lastName:"Paul", age:"25", gender:"Male", Dob:"12/3/1997", Address1:"abc", Address2:"def", pin:"123459"},
    {firstName:"Shanti", middleName:"", lastName:"Biswas", age:"27", gender:"Female", Dob:"12/20/1995", Address1:"abc", Address2:"def", pin:"123460"},
]

ngOnInit(){
  console.log(this.EmployeeList[0].firstName)
}

}
