import { Component, OnInit } from '@angular/core';

import {StockService} from '../stock.service';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {

  stocks :string[];

  selectedStock :any;
  updateEnabled = false;

  ngOnInit() {
    this.getAllStocks();
  }

  constructor(private stockService: StockService) {

  }

  getAllStocks() {
    this.stockService.getStockAPI()
    .subscribe(
      data => this.stocks = data,
      error => console.log('Server Error!')
    );
  }

  createStock(newStockCode :string, newName :string) {
    this.stockService.createStock(newStockCode, newName).subscribe();
    location.reload();
  }

  updateStock(newStockCode: string, newName: string) {
    this.stockService.updateStock(this.selectedStock.id, newStockCode, newName).subscribe();
    location.reload();
  }

  deleteStock(stockId: string) {
    this.stockService.deleteStock(stockId).subscribe();
    location.reload();
  }

  loadDetails(stock : any){
    this.updateEnabled = true;
    this.selectedStock = stock;
  }
}
