import { Component } from '@angular/core';
import { Hero } from '../../types/hero';
import { CommonModule } from '@angular/common';
import { HeroService } from '../../services/hero/hero.service';
import { MessageService } from '../../services/message/message.service';
import { RouterLink } from '@angular/router';
import { MessageComponent } from '../../components/message/message.component';
import { HeroDetailComponent } from '../../pages/hero-detail/hero-detail.component';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [HeroDetailComponent, CommonModule, RouterLink, MessageComponent],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.scss',
})
export class HeroesComponent {
  constructor(
    private heroService: HeroService,
    private messageService: MessageService
  ) {}

  hero: Hero | undefined = undefined;
  heroes: Hero[] | undefined;

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heross) => (this.heroes = heross));
  }

  setHero = (one: Hero): void => {
    this.hero = one;
    this.messageService.add(`Selected hero id = ${one.id}`);
  };
}
