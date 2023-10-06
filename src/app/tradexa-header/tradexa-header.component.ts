import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tradexa-header',
  templateUrl: './tradexa-header.component.html',
  styleUrls: ['./tradexa-header.component.scss']
})
export class TradexaHeaderComponent implements OnInit {

  menuList = ['D2C', 'For Retailers', 'For Distributor', 'WhatsApp', 'Marketing']

  constructor() { }

  ngOnInit(): void {
  }

}
