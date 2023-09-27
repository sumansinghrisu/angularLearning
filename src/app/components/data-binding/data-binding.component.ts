import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent {
  interpolation:string = 'Hey this is string interpolation.';
  imageUrl = 'https://picsum.photos/200/300';
  public inputValue: string = '';
  handleEventBinding() {
    alert("wow! Event is Binding");
  }
}
