import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})

export class ToolbarComponent implements OnInit {
  @Output() featureSelected = new EventEmitter<string>();

  onSelect(feature: string){
    this.featureSelected.emit(feature);
  }


  constructor() {

  }

  ngOnInit(): void {
  }

}
