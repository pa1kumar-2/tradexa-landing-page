import { Component } from '@angular/core';

@Component({
  selector: 'tradexa-footer',
  templateUrl: './tradexa-footer.component.html',
  styleUrls: ['./tradexa-footer.component.scss']
})
export class TradexaFooterComponent {
  serviceExpand: boolean = false;
  featureExpand: boolean = false;
  moreExpand: boolean = false;
}
