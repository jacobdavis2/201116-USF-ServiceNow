import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-hello-child',
  templateUrl: './hello-child.component.html',
  styleUrls: ['./hello-child.component.css']
})
export class HelloChildComponent implements OnInit {

  @Output() button = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {

  }

  buttonClicked() {
    this.button.emit("Button clicked!");
  }

}
