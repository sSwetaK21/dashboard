import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BootstrapsComponent } from './components/bootstraps/bootstraps.component';
import { DashbardComponent } from './components/dashbard/dashbard.component';
import { LoginComponent } from './login/login.component';
import { EmployeeComponent } from './components/pipes/employee/employee.component';
import { ToDoComponent } from './components/to-do/to-do.component';
import { FormsComponent } from './components/forms/forms.component';

const routes: Routes = [
  {
    path:'bootstraps',
    component: BootstrapsComponent
  },  
  // { path: '', redirectTo: '/dashbard', pathMatch: 'full' },
  { 
  path: 'dashbard', 
  component: DashbardComponent
 },
 { 
  path: 'todo', 
  component: ToDoComponent
 },
 { 
  path: 'login', 
  component: LoginComponent
 },
 { 
  path: 'pipes/employee', 
  component: EmployeeComponent
 },
 {
  path: 'forms',
  component: FormsComponent
 }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
