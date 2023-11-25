import { Component, OnInit } from '@angular/core';
import * as ApexCharts from 'apexcharts'

export interface PeriodicElement {
  sku: string;
  position: string;
  weight: number;
  status: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 'SA-11', sku: '1234', weight: 1.0079, status: 'OK' },
  { position: 'SA-12', sku: '2345', weight: 4.0026, status: 'OK' },
  { position: 'SA-13', sku: '3456', weight: 6.941, status: 'Ro' },
  { position: 'SA-14', sku: '4567', weight: 9.0122, status: 'OK' },
  { position: 'SA-21', sku: '5678', weight: 10.811, status: 'Dm' },
  { position: 'SA-22', sku: '6789', weight: 12.0107, status: 'Dm' },
  { position: 'SA-23', sku: '7890', weight: 14.0067, status: 'Ms' },
  { position: 'SA-24', sku: '1345', weight: 15.9994, status: 'OK' },
  { position: 'SA-31', sku: '2456', weight: 18.9984, status: 'OK' },
  { position: 'SA-32', sku: '3567', weight: 20.1797, status: 'OK' },
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'hackathon-EBAC';
  displayedColumns: string[] = ['position', 'sku', 'weight', 'status'];
  public dataSource: PeriodicElement[] = [];
  public show = false;

  constructor() {

  }

  ngOnInit() {
    this.dataSource = ELEMENT_DATA;

    setTimeout(() => {
      alert('SKU:8901 is Wrong on picking Bay 4')
      this.show = true;
    }, 4000);


    const optionsDonut = {
      dataLabels: {
        enabled: false
      },
      chart: {
        type: 'donut'
      },
      plotOptions: {
        pie: {
          donut: {
            labels: {
              show: true,

              total: {
                showAlways: true,
                show: true
              }
            }
          }
        }
      },
      series: [48334, 1666],
      labels: ['Para Analisar', 'Analisados'],

    };

    //TODO Porcentagem para terminar


    const optionsBar = {
      series: [
        {
          name: "",
          data: [2000, 3000 , 12000, 27000 ],
        },
      ],
      chart: {
        type: 'bar',
        height: 200,
      },
      plotOptions: {
        bar: {
          borderRadius: 0,
          horizontal: true,
          distributed: true,
          barHeight: '80%',
          isFunnel: true,
        },
      },
      colors: [
        '#F44F5E',
        '#E55A89',
        '#D863B1',
        '#CA6CD8',
      ],
      dataLabels: {
        enabled: true,
        formatter: function (val: any, opt: any) {
          return opt.w.globals.labels[opt.dataPointIndex]
        },
        dropShadow: {
          enabled: true,
        },
      },
      title: {
        align: 'middle',
      },
      xaxis: {
        categories: ['Periciveis', 'Seco', 'Resfriado', 'Congelado'],
      },
      legend: {
        show: false,
      },
    };

    const optionsLine = {
      series: [{
        name: 'Dano',
        data: [440, 550, 410, 607, 202, 403]
      }, {
        name: 'Perdidos',
        data: [130, 230, 200, 80, 130, 270]
      }, {
        name: 'Shelf Life',
        data: [110, 170, 150, 105, 201, 104]
      }, {
        name: 'Picking Errado',
        data: [210, 70, 250, 103, 202, 80]
      }],
      chart: {
        type: 'bar',
        height: 350,
        stacked: true,
        toolbar: {
          show: true
        },
        zoom: {
          enabled: true
        }
      },
      responsive: [{
        breakpoint: 480,
        options: {
          legend: {
            position: 'bottom',
            offsetX: -10,
            offsetY: 0
          }
        }
      }],
      plotOptions: {
        bar: {
          horizontal: false,
          borderRadius: 10,
          dataLabels: {
            total: {
              enabled: false,
              style: {
                fontSize: '13px',
                fontWeight: 900
              }
            }
          }
        },
      },
      xaxis: {
        type: 'datetime',
        categories: ['01/01/2023 GMT', '02/01/2023 GMT', '03/01/2023 GMT', '04/01/2023 GMT',
          '05/01/2023 GMT', '06/01/2023 GMT'
        ],
      },
      legend: {
        position: 'right',
        offsetY: 40
      },
      fill: {
        opacity: 1
      }
    };

    const donutChart = new ApexCharts(document.querySelector("#chart"), optionsDonut);
    const barChart = new ApexCharts(document.querySelector("#bar_chart"), optionsBar);
    const lineChart = new ApexCharts(document.querySelector("#line_chart"), optionsLine);


    barChart.render();
    donutChart.render();
    lineChart.render();

    //Botao de iniciar processo
    //Status scaneamento
  }
}
