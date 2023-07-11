import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name: string = 'ironman';
  public age: number = 34;

  get capitalizedName(): string{
    return this.name.toUpperCase();

  }

  public getHeroDescription():string{
    return `${ this.name} - ${this.age}`;
  }

  changeHero():void{
    this.name = 'jose';
    const valida : boolean = false;

    //TODO:
    /*throw 'Método no implementado'*/
  }
  changeAge():void{
    this.age = 25;
  }

  resetForm():void{
    this.name = 'ironman';
    this.age = 34;
  }
}
