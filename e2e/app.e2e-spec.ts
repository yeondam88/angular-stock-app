import { AngularStockAppPage } from './app.po';

describe('angular-stock-app App', function() {
  let page: AngularStockAppPage;

  beforeEach(() => {
    page = new AngularStockAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
