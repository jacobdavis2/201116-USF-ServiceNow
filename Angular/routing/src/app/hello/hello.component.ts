import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

  public myObservable = this.getObservable("https://pokeapi.co/api/v2/pokemon/ditto");

  getObservable(url: string) {
    return this.http.get(url);
  }

  constructor(public http: HttpClient) { }

  ngOnInit(): void {
    //this.myObservable.subscribe(res => console.log(res));
  }

  printEvent(event) {
    console.log(event);
  }
}
