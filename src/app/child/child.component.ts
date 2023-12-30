import { Component,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent
{

  @Output() public LaserLight=new EventEmitter<string>();
  

  public SendMessage(value:string)
  {
      this.LaserLight.emit(value);
      //console.log(value);
  }
}
