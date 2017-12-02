import { DealDoolPage } from './app.po';

describe('deal-dool App', () => {
  let page: DealDoolPage;

  beforeEach(() => {
    page = new DealDoolPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
