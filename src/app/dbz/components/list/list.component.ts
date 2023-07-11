import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  public characterList:Character[] = [{
    id: '',
    name: 'Trunks',
    power: 10
  }];

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

 onDeleteCharacter(id : string):void{
   if (!id){return;   }
console.log(id);
    //TODO: Emitir el ID DEL PERSONAJE
    this.onDelete.emit(id);
  }

}
