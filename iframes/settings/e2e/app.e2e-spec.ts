import { SettingsPage } from './app.po';

describe('settings App', function() {
  let page: SettingsPage;

  beforeEach(() => {
    page = new SettingsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
