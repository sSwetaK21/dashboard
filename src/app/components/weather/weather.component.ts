import { Component } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {
  weatherData = {
    city: 'New York',
    temperature: 20,
    description: 'Sunny'
  };


  constructor() { }

}
