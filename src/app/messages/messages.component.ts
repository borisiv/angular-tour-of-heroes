import { Component, OnInit } from '@angular/core';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  constructor(private messageService: MessageService) { }

  get messages(): string[] {
    return this.messageService.messages;
  }

  clear(): void {
    this.messageService.clear();
  }

  ngOnInit() {
  }

}
