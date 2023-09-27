import { Component, OnDestroy, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from '../../serices/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html', // Linked Template
  // template: `<h2>{{message}}</h2>`, // Inline Template
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  public message: string = '';
  @Input() childMessage: string = '';

  @Output() parentMessage = 'Message from child';


  constructor(private dataService: DataService) { };
  ngOnInit() {
    // console.log('ngOnInit runs...');
    // console.log(1 + "1" + "2");
    // console.log(1+ + "1" + "2");
    // this.init();

    // Call Service
    this.message = this.dataService.fetData();


  }
  ngOnDestroy(): void {
    console.log('ngOndestroy runs...');
  }

  init() {
    console.log('Init...');
    for (let i = 0; i < 5; i++) {
      var btn = document.createElement('button');
      btn.appendChild(document.createTextNode('Button' + i));
      btn.addEventListener('click', function () { console.log(i) });
      document.body.appendChild(btn);
    }
  }
}
