import { GpPcPage } from './app.po';

describe('gp-pc App', () => {
  let page: GpPcPage;

  beforeEach(() => {
    page = new GpPcPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
