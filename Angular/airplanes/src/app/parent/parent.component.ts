import { Component, OnInit } from '@angular/core';
import { Airplanes } from '../data';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  public airplanes = new Airplanes();
  public possibleDestinations: string[] = this.airplanes.data.from;
  public currentCity: string;
  public from: string;
  public to: string;

  constructor() { }

  ngOnInit(): void {
  }

  processCitySelect(city: string) {
    this.currentCity = city;

    // Logic related to determining which options
    // to show goes here
    this.possibleDestinations = this.airplanes.data.from.filter( (value, index) => {
      return value === city;
    });
  }

  purchaseTicket() {
    this.to = "";
    this.from = "";
    this.currentCity = "";
    this.possibleDestinations = this.airplanes.data.from;
  }
}
