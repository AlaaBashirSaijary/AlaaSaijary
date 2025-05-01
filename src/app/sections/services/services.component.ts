import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

interface Service {
  icon: string;
  title: string;
  description: string;
  features: string[];
}

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
  animations: [
    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('0.6s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class ServicesComponent {
  services: Service[] = [
    {
      icon: 'fas fa-code',
      title: 'Web Development',
      description: 'Creating modern and responsive web applications with cutting-edge technologies.',
      features: [
        'Custom Website Development',
        'Frontend Development',
        'Backend Development',
        'API Integration'
      ]
    },
    {
      icon: 'fas fa-mobile-alt',
      title: 'Mobile Development',
      description: 'Building cross-platform mobile applications with Flutter.',
      features: [
        'iOS & Android Apps',
        'Cross-platform Solutions',
        'UI/UX Design',
        'App Maintenance'
      ]
    },
    {
      icon: 'fas fa-shield-alt',
      title: 'Web Security',
      description: 'Implementing robust security measures and identifying vulnerabilities.',
      features: [
        'Security Auditing',
        'Vulnerability Assessment',
        'Security Implementation',
        'Best Practices'
      ]
    }
  ];
}
