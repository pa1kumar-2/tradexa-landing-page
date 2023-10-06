import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent {

  faqImage: string = 'faq-img-1.png';
  isImageAnimation = true;

  faqs: any = [
    {
      question: "Task and Reminder from chat",
      answer: "Convert important conversations into actionable tasks or reminders, guaranteeing you won't overlook any potential customer.",
      image: "faq-img-1.png"

    },
    {
      question: "Convert Every Visitor into a Customer",
      answer: "Automatically convert WhatsApp interactions into leads, eliminating the need for manual support-to-marketing data transfer.",
      image: "faq-img-2.png"
    },
    {
      question: "Automated Customer Support",
      answer: "Never miss a lead, and the query again saves time and improves efficiency about order status, pricing, discount, and delivery status.",
      image: "faq-img-3.png"
    },
    {
      question: "360-Degree Customer View",
      answer: "Get to know the entire context of the customer's previous history along with the message only.",
      image: "faq-img-4.png"
    },
    {
      question: "Auto customer info identification",
      answer: "Automatically learn the customer's details, including name, number, and previous history.",
      image: "faq-img-4.png"
    },
    {
      question: "Sales Recovery Through Abandoned Carts",
      answer: "Send personalised reminders on WhatsApp to customers to complete their purchase.",
      image: "faq-img-4.png"
    },
    {
      question: "Sell without having a website",
      answer: "Share your product catalogue and accept payment just through WhatsApp without worrying about managing the website.",
      image: "faq-img-4.png"
    }
  ]

  constructor() { }

  changefaq(faq: any) {
    this.faqImage = faq.image;
    this.isImageAnimation = true;
    setTimeout(() => {
      this.isImageAnimation = false;
    }, 3000)

  }
}
