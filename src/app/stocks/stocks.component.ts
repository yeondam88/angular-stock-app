import { Component } from '@angular/core';
import { StockService } from '../stock.service';

@Component({
  selector: 'app-stocks',
  template: `<h2>Stocks</h2>
  {{title}}

  <ul [ngStyle]="{'color': myColor, 'font-size': myFontSize}">
    <li *ngFor="let stock of stocks">{{stock}}</li>
  </ul>

  <hr/>

  <ul *ngIf="stockMarkets.length == 5" [ngClass]="{customClass: isCenter, centerClass: isColorViolet}">
    <li *ngFor="let stockMarket of stockMarkets">{{stockMarket}}</li>
  </ul>

  <hr/>

  <div [ngSwitch]="market">
    <div *ngSwitchCase="'NYSE'">New York Stock Exchange</div>
    <div *ngSwitchCase="'LSE'">London Stock Exchange</div>
    <div *ngSwitchDefault>Could not find a match</div>
  </div>
  `,
  styles: [
    `
      .customClass {
        color: violet;
      }
      .centerClass {
        text-align: center;
      }
    `
  ]
})

export class StocksComponent {

  isCenter = false;
  isColorViolet = true;

  myFontSize :string = '200%';
  myColor :string = 'blue';
  market :string = 'NYSE';
  title :string = 'List of Stocks:';
  stocks;
  showStockMarket :boolean = true;

  stockMarkets :string[] = ['NYSE', 'NASDAQ', 'EURONEXT', 'HKSE', 'LSE'];
  constructor(stockService: StockService) {
      this.stocks = stockService.getStocks();
  }
}
