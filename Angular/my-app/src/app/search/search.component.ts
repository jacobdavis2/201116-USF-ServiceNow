import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  showItem: boolean = false;
  people: any = [
    { name: "Bob", birthMonth: "Jan"},
    { name: "Stacy", birthMonth: "Mar"},
    { name: "Frank", birthMonth: "Nov"}
  ];

  public bob: string = "Bob"
  public charlie: string = "Charlie";

  constructor() { }

  ngOnInit(): void {
  }

  toggleShowItem(): void {
    this.showItem = !this.showItem;
    console.log("In toggle!")
  }
}
