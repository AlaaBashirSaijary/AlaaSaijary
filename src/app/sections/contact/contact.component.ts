import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { trigger, transition, style, animate } from '@angular/animations';
import { TranslateService } from '@ngx-translate/core';

interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations: [
    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('0.6s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  isSubmitting = false;
  submitMessage = '';

  socialLinks: SocialLink[] = [
    {
      name: 'WhatsApp',
      url: 'https://wa.me/+963984668063',
      icon: 'fab fa-whatsapp'
    },
    {
      name: 'Telegram',
      url: 'https://t.me/alaacoder',
      icon: 'fab fa-telegram'
    },
    {
      name: 'Twitter',
      url: 'https://x.com/AlaaSaijar21883',
      icon: 'fab fa-twitter'
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/profile.php?id=100073176605153&mibextid',
      icon: 'fab fa-facebook'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/AlaaBashirSaijary/',
      icon: 'fab fa-github'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/alaacoder',
      icon: 'fab fa-instagram'
    }
  ];

  constructor(
    private fb: FormBuilder,
    private translate: TranslateService
  ) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  ngOnInit() {
    emailjs.init("5_zy7d6PJkDXqfIc9");
  }

  async onSubmit() {
    if (this.contactForm.valid) {
      this.isSubmitting = true;
      this.submitMessage = '';

      try {
        const response = await emailjs.sendForm(
          'service_ztxin0c',
          'template_3csszbo',
          document.querySelector('form') as HTMLFormElement,
          '5_zy7d6PJkDXqfIc9'
        );

        if (response.status === 200) {
          this.submitMessage = 'CONTACT.FORM.SUCCESS';
          this.contactForm.reset();
        } else {
          throw new Error('Failed to send message');
        }
      } catch (error) {
        console.error('EmailJS Error:', error);
        this.submitMessage = 'CONTACT.FORM.ERROR';
      }

      this.isSubmitting = false;
    }
  }
}
