import { NgReduxCounterPage } from './app.po';

describe('ng-redux-counter App', () => {
  let page: NgReduxCounterPage;

  beforeEach(() => {
    page = new NgReduxCounterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
