
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

  faqs = [
    {
      question: 'What services does EstateConnect offer?',
      answer: 'EstateConnect provides a comprehensive platform for property buyers, renters, and sellers. Our services include property listings, inquiry management, feedback collection, and seamless communication tools. We also offer support for property owners to manage their listings efficiently.',
      open: false
    },
    {
      question: 'How does EstateConnect help property buyers?',
      answer: 'We simplify the property search process by offering a curated list of verified properties. Buyers can filter listings based on location, budget, and property type. Our platform also allows direct inquiries to sellers, making the process transparent and efficient.',
      open: false
    },
    {
      question: 'Can I list my property on EstateConnect?',
      answer: 'Yes, property owners can easily list their properties by creating an account. Once registered, you can upload property details, images, and pricing. Our team may also assist in verifying and promoting your listing for better visibility.',
      open: false
    },
    {
      question: 'Is EstateConnect free to use?',
      answer: 'Browsing properties and submitting inquiries is completely free for users. We may offer premium features for property owners and managers, such as featured listings, analytics, and lead management tools, which are available through subscription plans.',
      open: false
    },
    {
      question: 'How do I give feedback on a property or service?',
      answer: 'After logging into your account, you can navigate to the feedback section where you can rate properties, leave comments, and share your experience. Your feedback helps us maintain quality and improve our services for all users.',
      open: false
    }
  ];
  

  constructor() { }

  ngOnInit(): void { }

  toggleFAQ(index: number): void {
    this.faqs[index].open = !this.faqs[index].open;
  }
}
