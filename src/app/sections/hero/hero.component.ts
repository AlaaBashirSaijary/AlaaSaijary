import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

interface Technology {
  name: string;
  icon: string;
}

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
  animations: [
    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('0.6s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class HeroComponent implements OnInit {
  technologies: Technology[] = [
    { name: 'Flutter', icon: 'flutter-icon' },
    { name: 'React', icon: 'react-icon' },
    { name: 'Angular', icon: 'angular-icon' },
    { name: 'Laravel', icon: 'laravel-icon' },
    { name: 'Odoo', icon: 'odoo-icon' }
  ];

  
  constructor() { }

  ngOnInit(): void { }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
