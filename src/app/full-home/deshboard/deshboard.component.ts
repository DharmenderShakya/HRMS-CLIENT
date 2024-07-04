import { AfterViewInit, Component, OnInit} from '@angular/core';
import * as ApexCharts from 'apexcharts';
import { color } from 'echarts';

@Component({
  selector: 'app-deshboard',
  templateUrl: './deshboard.component.html',
  styleUrls: ['./deshboard.component.css']
})
export class DeshboardComponent implements OnInit{
  ngOnInit(): void {
    new ApexCharts(document.querySelector('#lineChartCanvas'), {
      series: [{
        name: "Desktops",
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
      }],
      chart: {
        height: 350,
        type: 'line',
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'straight'
      },
      grid: {
        row: {
          colors: ['#f3f3f3', 'transparent'],
          opacity: 0.5
        },
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
      }
    }).render();

    this.renderChart();
    this.renderColumnChart();
    this.renderPieChart();
    this.renderMixChart();
    this.renderSparkingChart();
    this.renderclientChart();
    this.renderprojectChart();
    this.renderemployeeChart();
  }
  
  renderChart(): void {
      const series = {
        "monthDataSeries1": {
          "prices": [
            8107.85,
            8128.0,
            8122.9,
            // Rest of the data...
          ],
          "dates": [
            "13 Nov 2017",
            "14 Nov 2017",
            // Rest of the dates...
          ]
        },
        // Rest of the series...
      };

      new ApexCharts(document.querySelector("#areaChart"), {
        series: [{
          name: "STOCK ABC",
          data: series.monthDataSeries1.prices
        }],
        chart: {
          type: 'area',
          height: 350,
          zoom: {
            enabled: false
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'straight'
        },
        subtitle: {
          text: 'Price Movements',
          align: 'left'
        },
        labels: series.monthDataSeries1.dates,
        xaxis: {
          type: 'datetime',
        },
        yaxis: {
          opposite: true
        },
        legend: {
          horizontalAlign: 'left'
        }
      }).render();
  }

  renderColumnChart(): void {
    
      new ApexCharts(document.querySelector("#columnChart"), {
        series: [{
          name: 'Net Profit',
          data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
        }, {
          name: 'Revenue',
          data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
        }, {
          name: 'Free Cash Flow',
          data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
        }],
        chart: {
          type: 'bar',
          height: 350
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '55%',
            endingShape: 'rounded'
          },
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          show: true,
          width: 2,
          colors: ['transparent']
        },
        xaxis: {
          categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
        },
        yaxis: {
          title: {
            text: '$ (thousands)'
          }
        },
        fill: {
          opacity: 1
        },
        tooltip: {
          y: {
            formatter: function(val: string) {
              return "$ " + val + " thousands";
            }
          }
        }
      }).render();
  }

  renderPieChart(): void {
      const options = {
        series: [44, 55, 13, 43, 22],
        chart: {
          height: 350,
          type: 'donut',
          // toolbar: {
          //   show: true
          // }
        },
        labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
      };

      const chart = new ApexCharts(document.querySelector("#donutChart"), options);
      chart.render();
  }

  renderMixChart(): void {
      var options = {
        series: [{
        name: 'TEAM A',
        type: 'column',
        data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30]
      }, {
        name: 'TEAM B',
        type: 'area',
        data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43]
      }, {
        name: 'TEAM C',
        type: 'line',
        data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39]
      }],
        chart: {
        height: 350,
        type: 'line',
        stacked: false,
      },
      stroke: {
        width: [0, 2, 5],
        curve: 'smooth'
      },
      plotOptions: {
        bar: {
          columnWidth: '50%'
        }
      },
      
      fill: {
        opacity: [0.85, 0.25, 1],
        gradient: {
          inverseColors: false,
          shade: 'light',
          type: "vertical",
          opacityFrom: 0.85,
          opacityTo: 0.55,
          stops: [0, 100, 100, 100]
        }
      },
      labels: ['01/01/2003', '02/01/2003', '03/01/2003', '04/01/2003', '05/01/2003', '06/01/2003', '07/01/2003',
        '08/01/2003', '09/01/2003', '10/01/2003', '11/01/2003'
      ],
      markers: {
        size: 0
      },
      xaxis: {
        type: 'datetime'
      },
      yaxis: {
        title: {
          text: 'Points',
        },
        min: 0
      },
      tooltip: {
        shared: true,
        intersect: false,
        y: {
          formatter: function (y: number) {
            if (typeof y !== "undefined") {
              return y.toFixed(0) + " points";
            }
            return y;
      
          }
        }
      }
      };

      var chart = new ApexCharts(document.querySelector("#mixchart"), options);
      chart.render();
  }

  renderSparkingChart(): void {
      const sparklineData = [3,6,4,8,1,9,12,20];
      var optionsSpark3 = {
        series: [{
        data: this.randomizeArray(sparklineData)
      }],
        chart: {
        type: 'area',
        height: 160,
        sparkline: {
          enabled: true
        },
      },
      stroke: {
        curve: 'straight'
      },
      fill: {
        colors:['#F44336', '#E91E63', '#9C27B0'],
        opacity: 0.3
      },
      xaxis: {
        crosshairs: {
          width: 1
        },
      },
      yaxis: {
        min: 0
      },
      title: {
        text: '$135,965',
        offsetX: 0,
        style: {
          fontSize: '24px',
        }
      },
      subtitle: {
        text: 'Earning',
        offsetX: 0,
        style: {
          fontSize: '14px',
        }
      }
      };


      var chartSpark3 = new ApexCharts(document.querySelector("#chartspark"), optionsSpark3);
        chartSpark3.render();
  }

  renderprojectChart(): void {
      const sparklineData = [3,6,4,8,1,9,12,20];
      var optionsSpark3 = {
        series: [{
        data: this.randomizeArray(sparklineData)
      }],
        chart: {
        type: 'area',
        height: 160,
        sparkline: {
          enabled: true
        },
      },
      stroke: {
        curve: 'straight'
      },
      fill: {
        colors: [ '#9C27B0'],
        opacity: 0.3
      },
      xaxis: {
        crosshairs: {
          width: 1
        },
      },
      yaxis: {
        min: 0
      },
      title: {
        text: '129',
        offsetX: 0,
        style: {
          fontSize: '24px',
        }
      },
      subtitle: {
        text: 'New Clients',
        offsetX: 0,
        style: {
          fontSize: '14px',
        }
      }
      };


      var chartSpark3 = new ApexCharts(document.querySelector("#chartsparkproject"), optionsSpark3);
        chartSpark3.render();
  }

  renderclientChart(): void {

      const sparklineData = [3,6,4,8,1,9,12,20];
      var optionsSpark3 = {
        series: [{
        data: this.randomizeArray(sparklineData)
      }],
        chart: {
        type: 'area',
        height: 160,
        sparkline: {
          enabled: true
        },
      },
      stroke: {
        curve: 'straight'
      },
      fill: {
        colors: [ '#01FFC4'],
        opacity: 0.3
      },
      xaxis: {
        crosshairs: {
          width: 1
        },
      },
      yaxis: {
        min: 0
      },
      title: {
        text: '154',
        offsetX: 0,
        style: {
          fontSize: '24px',
        }
      },
      subtitle: {
        text: 'Projects',
        offsetX: 0,
        style: {
          fontSize: '14px',
        }
      }
      };
      var chartSpark3 = new ApexCharts(document.querySelector("#chartsparknewclient"), optionsSpark3);
        chartSpark3.render();
  }

  renderemployeeChart(): void {
      const sparklineData = [3,6,4,8,1,9,12,20];
      var optionsSpark3 = {
        series: [{
        data: this.randomizeArray(sparklineData)
      }],
        chart: {
        type: 'area',
        height: 160,
        sparkline: {
          enabled: true
        },
      },
      stroke: {
        curve: 'straight'
      },
      fill: {
        colors: [ '#FFB701'],
        opacity: 0.3
      },
      xaxis: {
        crosshairs: {
          width: 1
        },
      },
      yaxis: {
        min: 0
      },
      title: {
        text: '650',
        offsetX: 0,
        style: {
          fontSize: '24px',
        }
      },
      subtitle: {
        text: 'Employees',
        offsetX: 0,
        style: {
          fontSize: '14px',
        }
      }
      };


      var chartSpark3 = new ApexCharts(document.querySelector("#chartsparkemployee"), optionsSpark3);
        chartSpark3.render();
  }

  randomizeArray(data: any) {
    // Implement your randomization logic here if needed
    return data;
  }

}

