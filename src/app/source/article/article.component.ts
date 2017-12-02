import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  author: string;
  title: string;
  description: string;
  url: string
  urlToImage: string;
  publishedAt: string;

  constructor() { 
    this.author = "Tristan Greene";
    this.title = "The TicHome Mini smart speaker is a Google Assistant you can shower with";
    this.description = "Mobvoi's TicHome Mini is a nifty little smart speaker that gives the Google Home Mini a run for it's money. It's also splash-resistant and portable.",
    this.url = "https://thenextweb.com/artificial-intelligence/2017/11/10/tichome-mini-smart-speaker-google-assistant-can-shower/";
    this.urlToImage = "https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2017/11/tichomefeat-social.jpg";
    this.publishedAt = "2017-11-10T23:48:25Z";
  }

  ngOnInit() {
  }

}
