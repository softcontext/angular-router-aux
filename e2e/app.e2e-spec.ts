import { AngularRouterAuxPage } from './app.po';

describe('angular-router-aux App', () => {
  let page: AngularRouterAuxPage;

  beforeEach(() => {
    page = new AngularRouterAuxPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
