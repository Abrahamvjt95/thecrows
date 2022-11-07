import { Component, Input, OnInit } from '@angular/core';
import { Parchment } from '../parchment';
declare var $: any;
@Component({
  selector: 'app-all-parchment',
  templateUrl: './all-parchment.component.html',
  styleUrls: ['./all-parchment.component.scss']
})
export class AllParchmentComponent implements OnInit {
  @Input() mail!: Parchment [];
  allMessages : Parchment [] = [];
  selectedPost: string =''
  selectedDate: Date = new Date()
  live: any = true;
  constructor() { }

  ngOnInit(): void {
    this.allMessages=this.mail;
    console.log(this.allMessages,"wiiii");
  }
  showModal(selectedPost:any) {
    $("#exampleModal").modal('show');
    console.log(selectedPost);
    this.selectedPost=selectedPost.message;
   this.selectedDate=selectedPost.date
  }
  hideModal() {
    $("#exampleModal").modal('hide');
  }
  deletePost() {
    const indexOfObject = this.allMessages.findIndex((object) => {
      return object.message === this.selectedPost;
    });
    this.allMessages.splice(indexOfObject,1);
    localStorage.setItem('messages',JSON.stringify(this.allMessages));
    $("#exampleModal").modal('hide');
  }
}
