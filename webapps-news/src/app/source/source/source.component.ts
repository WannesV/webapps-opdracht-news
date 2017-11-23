import { Component, OnInit, Input } from '@angular/core';
import { ArticleComponent } from '../article/article.component';
import { Source } from '../source.model';

@Component({
  selector: 'app-source',
  templateUrl: './source.component.html',
  styleUrls: ['./source.component.css']
})
export class SourceComponent implements OnInit {
  @Input() public source: Source;

  constructor() { }

  ngOnInit() {
  }

}
