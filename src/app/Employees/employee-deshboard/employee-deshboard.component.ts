import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as ApexCharts from 'apexcharts';

@Component({
  selector: 'app-employee-deshboard',
  templateUrl: './employee-deshboard.component.html',
  styleUrls: ['./employee-deshboard.component.css']
})
export class EmployeeDeshboardComponent implements OnInit{
  ngOnInit(): void {
    new ApexCharts(document.querySelector("#ColumnChart"), {
      series: [{
        name: "STOCK ABC",
       data: [44, 55, 41, 67, 22, 43, 21, 49],
      },
      {
        name: "STOCK XYZ",
        data: [44, 55, 41, 67, 22, 43, 21, 49],
      },
      {
        name: "STOCK PQR",
        data: [44, 55, 41, 67, 22, 43, 21, 49],
      }
      ],
      chart: {
        type: 'bar',
        height: 350,
        stacked: true,
        toolbar: {
          show: true
        },
        zoom: {
          enabled: false
        }
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              position: "bottom",
              offsetX: -10,
              offsetY: 0
            }
          }
        }
      ],
      plotOptions: {
        bar: {
          horizontal: false
        }
      },
      subtitle: {
        text: 'Price Movements',
        align: 'right'
      },
      xaxis: {
        categories: [
          "2011 Q1",
          "2011 Q2",
          "2011 Q3",
          "2011 Q4",
          "2012 Q1",
          "2012 Q2",
          "2012 Q3",
          "2012 Q4"
        ]
      },
      yaxis: {
        opposite: false
      },
      legend: {
        // horizontalAlign: 'center'
        position: "right",
        offsetY: 40
      },
      fill: {
        opacity: 1
      }
    }).render();

    new ApexCharts(document.querySelector("#redarchart"), {
      series: [44, 55, 67, 83],
      chart: {
          height: 350,
          type: "radialBar",
          zoom: {
              enabled: false
          }
      },
      plotOptions: {
          radialBar: {
              dataLabels: {
                  name: {
                      fontSize: "22px"
                  },
                  value: {
                      fontSize: "16px"
                  },
                  total: {
                      show: true,
                      label: "Total",
                      formatter: function() {
                          return "249";
                      }
                  }
              }
          }
      },
      
      labels: ["Apples", "Oranges", "Bananas", "Berries"]
  }).render();
  


  new ApexCharts(document.querySelector("#barchart"), {
    series: [{
      name: "Project1",
     data: [44, 55, 41, 67, 22, 43, 21],
    },
    {
      name: "Project2",
      data: [44, 55, 41, 67, 22, 43, 21],
    },
    {
      name: "Project3",
      data: [44, 55, 41, 67, 22, 43, 21],
    },
    {
      name: "Project4",
      data: [44, 55, 41, 67, 22, 43, 21],
    }
    ],
    chart: {
      type: 'bar',
      height: 350,
      stacked: true,
      toolbar: {
        show: true
      },
      zoom: {
        enabled: false
      }
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          legend: {
            position: "bottom",
            offsetX: -10,
            offsetY: 0
          }
        }
      }
    ],
    plotOptions: {
      bar: {
        horizontal: false
      }
    },
    subtitle: {
      text: 'Price Movements',
      align: 'right'
    },
    xaxis: {
      categories: [
        "Sunday",
        "Monday",
        "Tuesday",
        "wednesday",
        "Thusday",
        "Friday",
        "Saturday",
      ]
    },
    yaxis: {
      opposite: false
    },
    legend: {
      // horizontalAlign: 'center'
      position: "bottom",
      offsetY: 40
    },
    fill: {
      opacity: 1
    }
  }).render();


  new ApexCharts(document.querySelector("#redarschart"), {
    series: [44, 55, 67, 83],
    chart: {
      height: 350,
      type: "radialBar",
      offsetY: -10
    },
    plotOptions: {
      radialBar: {
        startAngle: -135,
        endAngle: 135,
        dataLabels: {
          name: {
            fontSize: "16px",
            color: undefined,
            offsetY: 120
          },
          value: {
            offsetY: 76,
            fontSize: "22px",
            color: undefined,
          },
          total: {
            show: true,
            label: "Total",
            formatter: function() {
                return "249";
            }
        }
        }
      }
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        shadeIntensity: 0.15,
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 50, 65, 91]
      }
    },
    stroke: {
      dashArray: 4
    },
    labels: ["Apples", "Oranges", "Bananas", "Berries"]
}).render();

  }


  
  
}
