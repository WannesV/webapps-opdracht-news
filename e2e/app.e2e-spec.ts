import { AppPage } from './app.po';
import { browser, by, element } from 'protractor';

describe('webapps-news App', () => {
  let page: AppPage;

  beforeEach((done) => {
    page = new AppPage();
    browser.get('/login');
    browser.findElement(by.id('username')).sendKeys('Jaak');
    browser.findElement(by.id('password')).sendKeys('DeKatKrabtDeKrollenVanDeTrap');
    const promise = browser.findElement(by.id('loginbtn')).click();
    browser.wait(promise, 1000);

    done();
  });

  it('there should be a source list component', () => {
    page.navigateTo();
    expect(page.getSourceComponents().count()).toEqual(1);
  });
});
