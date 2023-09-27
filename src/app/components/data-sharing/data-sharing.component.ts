import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-data-sharing',
  templateUrl: './data-sharing.component.html',
  styleUrls: ['./data-sharing.component.scss']
})
export class DataSharingComponent {
  parentMessage = "message from parent"
 

  // receiveMessage($event) {
  //   this.childMessage = $event;
  // }
  constructor() { }
}
