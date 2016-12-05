import { Angular2DemoServerPage } from './app.po';

describe('angular-2-demo-server App', function() {
  let page: Angular2DemoServerPage;

  beforeEach(() => {
    page = new Angular2DemoServerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
