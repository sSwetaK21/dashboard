import { Component } from '@angular/core';
import Chart from 'chart.js/auto';


@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent {
  title = 'ng-chart';
  chart: any = [];
 
  constructor() {}

  ngOnInit() {
    this.chart = new Chart('canvas', {
      type: 'bar',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
          {
            label: '# of Sales',
            data: [12, 19, 14, 10, 18, 6],
            borderWidth: 1,
            backgroundColor: '#4b49ac'
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }



}
