import { AngularDemoAnimationPage } from './app.po';

describe('angular-demo-animation App', function() {
  let page: AngularDemoAnimationPage;

  beforeEach(() => {
    page = new AngularDemoAnimationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
