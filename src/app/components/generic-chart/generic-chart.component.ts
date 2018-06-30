import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-generic-chart',
  templateUrl: './generic-chart.component.html',
  styles: []
})
export class GenericChartComponent implements OnInit {

  @Input() doughnutChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  @Input() doughnutChartData: number[] = [350, 450, 100];
  @Input() doughnutChartType = 'doughnut';
  @Input() barChartLegend = '';

  constructor() { }

  ngOnInit() {
  }


}
