import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

  getSourceComponents() {
    return element.all(by.id('source-component'));
  }

  getArticleComponents() {
    return element.all(by.id('article-component'));
  }
}
