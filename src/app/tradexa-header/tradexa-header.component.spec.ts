import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradexaHeaderComponent } from './tradexa-header.component';

describe('TradexaHeaderComponent', () => {
  let component: TradexaHeaderComponent;
  let fixture: ComponentFixture<TradexaHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TradexaHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TradexaHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
