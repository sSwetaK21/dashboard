import { NgModule  } from '@angular/core';
// import { CommonModule } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselComponent } from './carousel/carousel.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { WeatherComponent } from './components/weather/weather.component';
import { BarComponent } from './components/bar/bar.component';
import { BootstrapsComponent } from './components/bootstraps/bootstraps.component';
import { DashbardComponent } from './components/dashbard/dashbard.component';
import { LoginComponent } from './login/login.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { MrmissPipe } from './components/pipes/employee/mrmiss.pipe';
import { SearchPipe } from './components/pipes/employee/search.pipe';
import { FormsModule } from '@angular/forms';
import { EmployeeComponent } from './components/pipes/employee/employee.component';
import { ToDoComponent } from './components/to-do/to-do.component';
import { FormsComponent } from './components/forms/forms.component';

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    SidebarComponent,
    WeatherComponent,
    BarComponent,
    BootstrapsComponent,
    DashbardComponent,
    LoginComponent,
    PipesComponent,
    MrmissPipe,
    SearchPipe,
    EmployeeComponent,
    ToDoComponent,
    FormsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule
    // CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
