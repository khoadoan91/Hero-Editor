import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
    moduleId: module.id,
    selector: 'my-dashboard',
    templateUrl: 'dashboard.component.html',
    styleUrls: ['dashboard.component.css']
})

export class DashboardComponent {
    heroes: Hero[] = [];

    constructor(private router: Router, private heroService: HeroService) { }

    ngOnInit(): void {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes.slice(0, 4));
    }

    gotoDetail(hero: Hero): void {
        this.router.navigate(['/detail', hero.id]);
    }
}