import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TacoService } from './taco.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'restapi';
  public randomTaco;
  public myObservable = new Observable(
    function subscribe(subscriber) {
      subscriber.next("Hello from inside an observable!");
    }
  );

  constructor(public taco: TacoService) { }

  ngOnInit(): void {
    
  }

  click() {
    this.taco.getRandomTaco().subscribe( response => {
      this.randomTaco = response;
      console.log(response);
    });
  }
}
