import { ArticleComponent } from './source/article/article.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http'
import { AppComponent } from './app.component';
import { SourceComponent } from './source/source/source.component';
import { AddSourceComponent } from './source/add-source/add-source.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    SourceComponent,
    AddSourceComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
