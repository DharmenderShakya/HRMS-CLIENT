import { Component, OnInit } from '@angular/core';
import { ExpenceService } from '../expence.service';


@Component({
  selector: 'app-expense-report',
  templateUrl: './expense-report.component.html',
  styleUrls: ['./expense-report.component.css']
})
export class ExpenseReportComponent implements OnInit {

  isVisibleStatusPay = 'Paid';

  createExpense = {
    assignBy: '',
    invoice_no: '',
    expence_date: '',
    expense: '',
    expence_by: '',
    expence_amount: '',
    paymentMode: '',
    paymentStatus: '',
    paidTo: ''
  };

  constructor(private expenceService: ExpenceService) {
  }

  ngOnInit(): void {
  }

  createExpence() {
    this.expenceService.createExpence(this.createExpense).subscribe((err)=>{
      console.log(err);
      
    })
  }

}
