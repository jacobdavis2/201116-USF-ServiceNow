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
  public paths: string[] = [
    "https://th.bing.com/th/id/OIP.JgsSdU_xoueulDNv3yKnegHaJ4?pid=Api&rs=1",
    "https://th.bing.com/th/id/OIP.-e-CMAuSIbTtb5h8HaDhGwHaEK?pid=Api&rs=1"
  ];
  public myPath: string = this.paths[0];
  public modelString: string = "";
  public isChecked: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleShowItem(): void {
    this.showItem = !this.showItem;
    console.log("In toggle!")
  }

  toggleDogPic(): void {
    if (this.myPath === this.paths[0]) {
      this.myPath = this.paths[1];
    } else {
      this.myPath = this.paths[0];
    }
  }

  printModel(): void {
    console.log("modelString: " + this.modelString);
    console.log(this.isChecked);
  }
}
