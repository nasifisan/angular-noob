import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { Hero } from '../../types/hero';
import { HeroService } from '../../services/hero/hero.service';
import { RouterLink } from '@angular/router';
import { MessageComponent } from '../../components/message/message.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NgFor, RouterLink, MessageComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService
      .getHeroes()
      .subscribe((heroes) => (this.heroes = heroes.slice(1, 5)));
  }
}
