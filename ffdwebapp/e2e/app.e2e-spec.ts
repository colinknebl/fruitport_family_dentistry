import { FfdwebappPage } from './app.po';

describe('ffdwebapp App', () => {
  let page: FfdwebappPage;

  beforeEach(() => {
    page = new FfdwebappPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
