import { NgIf, UpperCasePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Hero } from '../../interface/hero';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hero-detail',
  imports: [NgIf, UpperCasePipe, FormsModule],
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.css'
})
export class HeroDetailComponent {

  @Input() hero?: Hero;

}
