import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Parchment } from '../parchment';
@Component({
  selector: 'app-new-crow',
  templateUrl: './new-crow.component.html',
  styleUrls: ['./new-crow.component.scss']
})
export class NewCrowComponent implements OnInit {
  newMessage = '';
  newParchment: Parchment = {
    message: '',
    date: new Date()
  }
  allMessages : Parchment [] = []
  constructor() {}
  
  get isParchmentEmpty() {
    return this.newMessage.trim().length === 0;
  }

  ngOnInit(): void {
  // localStorage.removeItem("messages")
   let data = localStorage.getItem("messages")|| "";
   this.allMessages=JSON.parse(data);
  }

  onSubmit($event: Event) {
    $event.preventDefault();
    if (this.isParchmentEmpty) {
      return;
    }
    else{
      this.newParchment.message=this.newMessage;
      this.newParchment.date=new Date()
      this.allMessages.push({...this.newParchment});
      localStorage.setItem('messages',JSON.stringify(this.allMessages));
      this.newMessage = '';
    }
    return;
  }
}
