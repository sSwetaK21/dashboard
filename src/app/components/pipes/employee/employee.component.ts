import { Component } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  searchText:string ='';


  employeeData=[
    { id: 1, name: 'Ajinkya', gender:'Male'} ,
    { id: 2, name: 'Shweta', gender:'Female'} ,
    { id: 3, name: 'Rajas', gender:'Male'} ,
    { id: 4, name: 'Neha', gender:'Female'} ,
    { id: 5, name: 'Gaurav', gender:'Male'} ,
    { id: 6, name: 'Rohit', gender:'Male'} ,
    { id: 7, name: 'shradha', gender:'Female'} ,
    { id: 8, name: 'manasa', gender:'Female'} ,
    { id: 9, name: 'Rajan', gender:'Male'} ,
    { id: 10, name: 'shreyas', gender:'Male'} ,
    { id: 11, name: 'Kanika', gender:'Female'} ,
    { id: 12, name: 'Prithivi', gender:'Male'} 

  ]

}
