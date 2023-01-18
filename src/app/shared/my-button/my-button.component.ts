import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-my-button',
  templateUrl: './my-button.component.html',
  styleUrls: ['./my-button.component.css'],
})
export class MyButtonComponent {
  @Input()
  public name: string = '';

  @Input()
  public style: string = '';
}
