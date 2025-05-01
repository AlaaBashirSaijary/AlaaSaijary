import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

interface Project {
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  links: {
    demo?: string;
    github?: string;
  };
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  animations: [
    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('0.5s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class ProjectsComponent implements OnInit {
  selectedCategory: string = 'all';
  projects: Project[] = [
    {
      title: 'PROJECTS.ITEMS.DOCTOR_APPOINTMENT.TITLE',
      description: 'PROJECTS.ITEMS.DOCTOR_APPOINTMENT.DESCRIPTION',
      image: 'assets/projects/9.jpg',
      category: 'web',
      technologies: ['Angular', 'Laravel', 'MySQL', 'Bootstrap'],
      links: {
        demo: 'https://doctor-appointment-demo.com',
        github: 'https://github.com/username/doctor-appointment'
      }
    },
    {
      title: 'PROJECTS.ITEMS.FOOD_DELIVERY.TITLE',
      description: 'PROJECTS.ITEMS.FOOD_DELIVERY.DESCRIPTION',
      image: 'assets/projects/10.jpg',
      category: 'web',
      technologies: ['Angular', 'Laravel', 'MySQL', 'Tailwind CSS'],
      links: {
        demo: 'https://food-delivery-demo.com',
        github: 'https://github.com/username/food-delivery'
      }
    },
    {
      title: 'PROJECTS.ITEMS.CRYPTO.TITLE',
      description: 'PROJECTS.ITEMS.CRYPTO.DESCRIPTION',
      image: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&w=800',
      category: 'web',
      technologies: ['React', 'Redux', 'Crypto API', 'Material UI'],
      links: {
        demo: 'https://crypto-tracker-demo.com',
        github: 'https://github.com/username/crypto-tracker'
      }
    },
    {
      title: 'PROJECTS.ITEMS.PROJECT1.TITLE',
      description: 'PROJECTS.ITEMS.PROJECT1.DESCRIPTION',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800',
      category: 'mobile',
      technologies: ['Flutter', 'Firebase', 'Dart'],
      links: {
        demo: 'https://demo-learning-platform.com',
        github: 'https://github.com/username/learning-platform'
      }
    },
    {
      title: 'PROJECTS.ITEMS.PROJECT2.TITLE',
      description: 'PROJECTS.ITEMS.PROJECT2.DESCRIPTION',
      image: 'assets/projects/5.jpg',
      category: 'mobile',
      technologies: ['Flutter', 'Firebase', 'Dart'],
      links: {
        demo: 'https://play.google.com/store/apps/task-manager',
        github: 'https://github.com/username/task-manager'
      }
    },
    {
      title: 'PROJECTS.ITEMS.PROJECT3.TITLE',
      description: 'PROJECTS.ITEMS.PROJECT3.DESCRIPTION',
      image: 'assets/projects/3.jpg',
      category: 'security',
      technologies: ['Python', 'TensorFlow', 'OpenCV', 'Keras'],
      links: {
        github: 'https://github.com/username/security-system'
      }
    },
    {
      title: 'PROJECTS.ITEMS.PROJECT4.TITLE',
      description: 'PROJECTS.ITEMS.PROJECT4.DESCRIPTION',
      image: 'https://images.unsplash.com/photo-1527430253228-e93688616381?auto=format&fit=crop&w=800',
      category: 'ai',
      technologies: ['Python', 'NLP', 'TensorFlow', 'BERT'],
      links: {
        demo: 'https://ai-chatbot-demo.com',
        github: 'https://github.com/username/ai-chatbot'
      }
    },
    {
      title: 'PROJECTS.ITEMS.PROJECT5.TITLE',
      description: 'PROJECTS.ITEMS.PROJECT5.DESCRIPTION',
      image: 'assets/projects/1.jpg',
      category: 'ai',
      technologies: ['Python', 'NLP', 'TensorFlow', 'BERT'],
      links: {
        demo: 'https://ai-chatbot-demo.com',
        github: 'https://github.com/username/ai-chatbot'
      }
    }
  ];

  filteredProjects: Project[] = this.projects;

  constructor() {}

  ngOnInit(): void {
    this.filterProjects('all');
  }

  filterProjects(category: string): void {
    this.selectedCategory = category;
    this.filteredProjects = category === 'all'
      ? this.projects
      : this.projects.filter(project => project.category === category);
  }
}
