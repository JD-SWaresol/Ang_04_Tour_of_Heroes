import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroesComponent } from './components/heroes/heroes.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeroesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Tour_of_Heores';
}
