import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Airplanes } from '../data';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  public airplanes = new Airplanes();

  @Output() citySelected = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  public emit(city: string) {
    this.citySelected.emit(city);
  }

}
