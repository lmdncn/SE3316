import { TabTasticPage } from './app.po';

describe('tab-tastic App', function() {
  let page: TabTasticPage;

  beforeEach(() => {
    page = new TabTasticPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
