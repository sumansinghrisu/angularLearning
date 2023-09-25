import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  ngOnInit() {
    console.log('ngOnInit runs...');
    console.log(1 + "1" + "2");
    console.log(1+ + "1" + "2");
    this.init();
  }
  ngOnDestroy(): void {
    console.log('ngOndestroy runs...');
  }

  init() {
    console.log('Init...');
    for(let i=0; i< 5; i++) {
      var btn = document.createElement('button');
      btn.appendChild(document.createTextNode('Button' + i));
      btn.addEventListener('click', function() {console.log(i)});
      document.body.appendChild(btn);
    }
  }
}
