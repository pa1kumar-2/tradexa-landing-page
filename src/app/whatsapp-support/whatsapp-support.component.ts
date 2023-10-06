import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-whatsapp-support',
  templateUrl: './whatsapp-support.component.html',
  styleUrls: ['./whatsapp-support.component.scss']
})
export class WhatsappSupportComponent implements OnInit {
  state = "active";

  interval!: any

  multiHeading = [
    {
      index: 0,
      headline: 'Sell product',
      className: 'title-1 animated fadeInDown',
      heroImage: 'assets/images/sample-image-2.webp',
      backGroundCircle: '#d2e3fc'
    },

    {
      index: 1,
      headline: 'Give support',
      className: 'title-2 animated fadeInDown',
      heroImage: 'assets/images/sample-image-3.webp',
      backGroundCircle: '#fce8e6'
    },

    {
      index: 2,
      headline: 'Marketing',
      className: 'title-3 animated fadeInDown',
      heroImage: 'assets/images/sample-image-2.webp',
      backGroundCircle: '#d2e3fc'
    }
  ]

  headingIndex = 0;
  currentHeading = this.multiHeading[this.headingIndex]


  benefits = [{
    state: 'Save',
    heading: `100 Hours Monthly`,
    caption: `Become organized and be on top of everything to make youself and your team producitve.`
  },

  {
    state: 'Run',
    heading: `Your entire business individually`,
    caption: `Stop worrying about many people when you can take care of your business on your own.`
  },

  {
    state: 'Cut down',
    heading: `Your customer acquisition cost by 50%`,
    caption: `In business, customer acquisition is costly. Neglecting customer queries can waste all your efforts and investments in bringing them to your website.`
  },

  {
    state: '50%',
    heading: `Abandoned Cart Recovery`,
    caption: `Over 70% of customers abandon their carts. By using automated reminders and product offers, you can recover 50% of these abandoned carts, potentially doubling your sales.`
  },

  {
    state: '4X',
    heading: `Sales Growth`,
    caption: `Engaging with your customers, building trust, and encouraging repeat purchases can also turn them into advocates for your brand.`
  },

  {
    state: '24/7',
    heading: `Customer Support`,
    caption: `Stay connected with your customers around the clock, ensuring you never miss a message, even when you and your team are unavailable.`
  }
  ]

  conversion = {
    imageUrl: 'assets/images/growth-screenshot-sample.svg',
    iconUrl: 'assets/images/growth-icon.svg',
    iconText: 'Drive ',
    title: '4X  Sales growth & Conversions on WhatsApp',
    caption: `Increase your sales 4X by cultivating repeat business from your existing customers. Use WhatsApp to guide nurtured leads through the sales funnel, resulting in higher conversion rates.`,
    buttonText: `Explore More`
  }

  joinUs = [{
    imgUrl: 'assets/images/chat-icon.svg',
    title: 'Send Bulk WhatsApp, SMS and Email',
    caption: `Boost your product visibility and promote your special offers with bulk marketing campaigns.`
  },

  {
    imgUrl: 'assets/images/group-icon.svg',
    title: 'Team Chat Inbox',
    caption: `Instant Team Collaboration: Single Number, Multiple Users.`
  },

  {
    imgUrl: 'assets/images/green-tick-icon.svg',
    title: 'Green Tick verification',
    caption: `Apply for the WhatsApp Green Tick alongside your brand name to build trust.`
  },
  ]

  abandoned = {
    imageUrl: 'assets/images/abondoned-cart-img.svg',
    title: '50% Abandoned Cart Recovery',
    caption: `Boost your sales by 2x with automated WhatsApp reminders and exclusive product offers that help recover more than 50% of abandoned carts. Did you know that over 70% of customers drop their items after adding them to the cart?`,
    buttonText: `Explore More`
  }

  acquisition = {
    imageUrl: 'assets/images/acquisition-screenshot.svg',
    title: '50% Lower Customer Acquisition Costs',
    caption: `Reduce the cost of acquiring new customers by 50%. Increase your consumer base and cost-effectiveness to maximise your return on investment.`,
    buttonText: `Explore More`
  }

  experience = {
    imageUrl: 'assets/images/experience-screenshot.svg',
    title: `We Prioritise Customer Experience`,
    caption: `Gain insight into your customer's journey with Tradexa. Access essential customer information from a single platform and empower your representatives to engage in personalised conversations, no matter where they are.`,
    buttonText: `Explore More`
  }

  constructor() { }


  ngOnInit(): void {

    this.interval = setInterval(() => {
      this.currentHeading = this.multiHeading[this.headingIndex++]
      if (this.headingIndex === this.multiHeading.length) {
        this.headingIndex = 0
      }

    }, 3000);

  }

  ngOnDestroy() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }


}
