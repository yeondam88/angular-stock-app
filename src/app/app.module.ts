import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { routing } from './app.routing';

import { StocksComponent } from './stocks/stocks.component';
import { StockService } from './stock.service';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent, StocksComponent, DashBoardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule,
    routing
  ],
  providers: [StockService],
  bootstrap: [AppComponent]
})
export class AppModule { }
