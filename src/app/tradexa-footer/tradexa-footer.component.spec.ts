import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradexaFooterComponent } from './tradexa-footer.component';

describe('TradexaFooterComponent', () => {
  let component: TradexaFooterComponent;
  let fixture: ComponentFixture<TradexaFooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TradexaFooterComponent]
    });
    fixture = TestBed.createComponent(TradexaFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
