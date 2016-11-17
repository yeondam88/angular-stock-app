import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {StocksComponent} from './stocks/stocks.component';
import {AppComponent} from './app.component';

import {DashBoardComponent} from './dash-board/dash-board.component';

const appRoutes: Routes = [
  {
    path: '',
    component: DashBoardComponent
  },
  {
    path: 'stocks',
    component: StocksComponent
  }
];

export const routing : ModuleWithProviders = RouterModule.forRoot(appRoutes);
