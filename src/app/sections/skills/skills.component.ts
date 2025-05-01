import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

interface SkillCategory {
  name: string;
  skills: Skill[];
}

interface Skill {
  name: string;
  level: number;
  icon?: string;
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  animations: [
    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('0.6s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class SkillsComponent {
  skillCategories: SkillCategory[] = [
    {
      name: 'Languages',
      skills: [
        { name: 'Arabic', level: 100, icon: 'language' },
        { name: 'English', level: 90, icon: 'language' },
        { name: 'Turkish', level: 60, icon: 'language' }
      ]
    },
    {
      name: 'Programming',
      skills: [
        { name: 'HTML/CSS', level: 95, icon: 'code' },
        { name: 'JavaScript', level: 90, icon: 'javascript' },
        { name: 'TypeScript', level: 85, icon: 'typescript' },
        { name: 'Laravel', level: 80, icon: 'angular' },
        { name: 'Flutter', level: 85, icon: 'angular' },
        { name: 'Angular', level: 75, icon: 'angular' },
        { name: 'React', level: 70, icon: 'react' },
        { name: 'Node.js', level: 70, icon: 'nodejs' },
        { name: 'Python', level: 80, icon: 'python' }
      ]
    },
    {
      name: 'Development Tools',
      skills: [
        { name: 'Git', level: 90, icon: 'git' },
        { name: 'VS Code', level: 95, icon: 'vscode' },
        { name: 'Docker', level: 80, icon: 'docker' },
      ]
    }
  ];
}
