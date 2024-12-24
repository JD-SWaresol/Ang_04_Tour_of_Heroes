import { Component } from '@angular/core';
import { Hero } from '../../interface/hero';
import { NgFor, NgIf, UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HEROES } from '../../mock/mock-heroes';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';

@Component({
  selector: 'app-heroes',
  imports: [UpperCasePipe, FormsModule, NgFor, NgIf, HeroDetailComponent],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent {

  heroes = HEROES;

  selectedHero?: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}
