import { Component, Output, EventEmitter } from '@angular/core';
import { Source } from '../source.model';

@Component({
  selector: 'app-add-source',
  templateUrl: './add-source.component.html',
  styleUrls: ['./add-source.component.css']
})
export class AddSourceComponent  {
  @Output() public newSource = new EventEmitter<Source>();
  

  addSource(newSourceName: HTMLInputElement) : boolean {
    let source = new Source("0", newSourceName.value,"", "", "", "", "");
    this.newSource.emit(source);
    return false;
  }

}
