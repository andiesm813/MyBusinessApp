import { Component, OnInit } from '@angular/core';
import { MyBusinessDataService } from '../services/my-business-data.service';
import { NorthwindService } from '../services/northwind.service';
import { FinancialService } from '../services/financial.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public myBusinessDataTable1: any = null;
  public northwindEmployees: any = null;
  public financialGlobalElectricityDemand: any = null;

  constructor(
    private myBusinessDataService: MyBusinessDataService,
    private northwindService: NorthwindService,
    private financialService: FinancialService,
  ) {}

  ngOnInit() {
    // depending on implementation, data subscriptions might need to be unsubbed later
    this.myBusinessDataService.getTable1().subscribe(data => this.myBusinessDataTable1 = data);
    this.northwindService.getData('Employees').subscribe(data => this.northwindEmployees = data);
    this.financialService.getData('GlobalElectricityDemand').subscribe(data => this.financialGlobalElectricityDemand = data);
  }
}
