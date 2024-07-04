import { Component, OnInit } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private spinner: NgxSpinnerService,private router: Router) {}

  ngOnInit() {
    // Show spinner
    // this.spinner.show();

    // // Hide spinner after 5 seconds
    // setTimeout(() => {
    //   this.spinner.hide();
    // }, 3000);

    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.spinner.show();
      } else if (event instanceof NavigationEnd || event instanceof NavigationCancel || event instanceof NavigationError) {
        this.spinner.hide();
      }
    });
    
  }
  title:string = 'sidebardemo';
  
}
