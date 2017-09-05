import { TheHustleClubPage } from './app.po';

describe('the-hustle-club App', function() {
  let page: TheHustleClubPage;

  beforeEach(() => {
    page = new TheHustleClubPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
