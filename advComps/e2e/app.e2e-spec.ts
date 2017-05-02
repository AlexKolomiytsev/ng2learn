import { AdvCompsPage } from './app.po';

describe('adv-comps App', () => {
  let page: AdvCompsPage;

  beforeEach(() => {
    page = new AdvCompsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
