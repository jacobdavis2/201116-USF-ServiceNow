import { Component } from '@angular/core';
import { MessageService } from './message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'services';

  constructor(private messageService: MessageService) { }

  public text: string;

  public click() {
    if (this.text) {
      this.messageService.addMessage(this.text);
      this.text = "";
    }
  }
}
