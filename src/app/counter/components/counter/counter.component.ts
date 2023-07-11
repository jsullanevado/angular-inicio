import { Component ,OnInit} from "@angular/core";



@Component({
  selector: 'app-counter',
  template: `
  <h3>Counter: {{counter}}</h3>
    <button (click)="increaseBy(0)">+1</button>
    <button (click)="resetCounter()">Reset</button>
    <button (click)="increaseBy(1)">-1</button>

  `
})



export class CounterComponent {
  public counter:number= 10;


  increaseBy(condicion : number):void{
    if(condicion == 0){this.counter= this.counter +1;}else{this.counter=this.counter-1}

  }

  resetCounter(){
    this.counter= 10;
  }


}
